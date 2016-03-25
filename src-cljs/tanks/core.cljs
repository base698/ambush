(ns tanks.core
  (:require
    [reagent.core :as r]
    [cljs-hash.sha1 :refer [sha1]]
    [tanks.render :as render]
    [tanks.utils :refer [log]]))

(enable-console-print!)

(def WIDTH 800)
(def HEIGHT 600)

(defonce world { 
  :width WIDTH
  :height HEIGHT
})

(defonce entity-id 1)

(defn get-id []
  (set! entity-id (inc entity-id)) entity-id)

(defonce first-id (get-id))

(def time-now (atom 0.0))

(defonce playing (r/atom false))

(defn get-shrapnel
  "position color speed and angle"
  [p c s a duration]
  {:id (get-id)
   :type :shrapnel
   :time-in @time-now
   :expire-length duration
   :w 3
   :h 3
   :speed s
   :angle a
   :position p
   :color c})

(defn get-player [h p c t]
  (let [p {:id (get-id)
           :type :player
           :score 0
           :color c
           :speed 0.9
           :health h
           :position p
           :w 20
           :h 20
           :angle 0
           :time-between-shots t
           :last-shot 0
           :hits 0
           :shots 0
           :transforms []
           :bombs 1}]
    p))

(defonce key-map {87 :w 
                  83 :s 
                  65 :a 
                  68 :d 
                  38 :w
                  37 :a
                  39 :d
                  40 :s
                  32 :space})

;;; Crux of the data updated for the game
(defonce player (assoc (get-player 10 [200, 200] "#072" 850) :human true))

(defonce keypresses (atom {}))

(defonce ai-agents (atom {}))

(defonce entities (atom {(player :id)
                          player}))

(defonce level (atom 1))

(defonce sapper-rate (atom 6000))

(defonce speed-rate (atom 6000))

(defonce level-increase-rate 1.2)

(defn get-shots [entities]
  (filter #(= :shot (%1 :type)) (vals entities)))

(defn get-players-and-walls [entities]
  (remove #(or
            (= :shrapnel (%1 :type))
            (= :shot (%1 :type))) (vals entities)))

(defn collision? [p q]
  (let [[px1 py1] (p :position)
        {pw :w ph :h} p
        px2 (+ px1 pw)
        py2 (+ py1 ph)
        [qx1 qy1] (q :position)
        {qw :w qh :h} q
        qx2 (+ qx1 qw)
        qy2 (+ qy1 qh)]
    (and (< px1 qx2)
         (> px2 qx1)
         (< py1 qy2)
         (> py2 qy1))))
 
(defn intro-enemy-position []
  (nth [[-5 (rand-int HEIGHT)]
        [(rand-int WIDTH) -5]
        [(+ 5 WIDTH) (rand-int HEIGHT)]
        [(rand-int WIDTH) (+ 5 HEIGHT)]] (rand-int 4)))

(defn add-sapper [s]
  (let [id (get-id)]
    (swap! entities 
      assoc 
      id {:id id
          :type :sapper
          :w 10
          :h 10
          :speed s
          :health 10
          :transforms []
          :position (intro-enemy-position)})))

(defn add-ai [id]
  (let [ai {:id (get-id)
            :player-id id
            :player-last-position (sorted-set) 
            :player-last-angle (sorted-set)}
        id (ai :id)]
    (swap! ai-agents assoc id ai)
    id))

;; TODO: make into level up/playing cpu
(defn add-player []
  (let [player (get-player 30 [500 500] "#992" 3300)
        id (player :id)
        ai-id (add-ai id)
        player (assoc player :ai-id ai-id)]
    (swap! entities assoc id player)))

(defonce player-key-map {:space {:type :shoot} 
                         :b {:type :player-bomb} 
                         :w {:type :player-move :player-move 1} 
                         :s {:type :player-move :player-move -1} 
                         :a {:type :player-turn :player-turn -0.1} 
                         :d {:type :player-turn :player-turn 0.1}})

(defn ease-in-quad [x t b c d]
    (+ (* c (/ t d) (/ t d)) b))

(defn exp [x n]
  (reduce * (repeat n x)))

(defn can-shoot? [p t]
  (> (- t (p :last-shot)) (p :time-between-shots)))

(defn oob? [p]
  (let [[x y] p]
    (or (> x WIDTH)
        (> y HEIGHT)
        (< x 0)
        (< y 0))))

(defn dist [p1 p2]
  (let [[x1 y1] p1
        [x2 y2] p2]
    (Math/sqrt (+ (exp (- x2 x1) 2) (exp (- y2 y1) 2)))))

(defn angle-at [p1 p2]
  (let [[x1 y1] p1
        [x2 y2] p2
        dx (- x2 x1)
        dy (- y2 y1)]
    (- (Math/atan2 dy dx) Math/PI)))

(defn explosion-at
  "Creates an explosion at a point"
  [p]
  (dotimes [n 35] (let [s (get-shrapnel p "#c55"
                                        (+ 1 (/ (rand 100) 40))
                                        n
                                        (rand-int 2000))]
        (swap! entities assoc (s :id) s))))

(defn ring-explosion-at
  "Creates an explosion at a point"
  [start p]
  (doseq [n (range (+ start 0) (+ start 360) 30)]
    (let [angle (* n (/ Math/PI 180))
          s (get-shrapnel p "#dd5" 1.7 angle (rand-int 230))]
      (swap! entities assoc (s :id) s))))

(defn sapper-explosion-at
  [p]
  (doseq [n (range 0 400 100)]
    (.setTimeout js/window #(ring-explosion-at (/ n 20) p) n)))
 
(defmulti do-event (fn [e]
                     (:type e)))

(defmethod do-event :default [x])

(defmethod do-event :sapper-move [e]
  (let [id (e :id) 
        sapper (@entities id) 
        old-y (get-in sapper [:position 1])
        old-x (get-in sapper [:position 0])
        [px py] (get-in @entities [(player :id) :position])
        deltaY (- old-y py)
        deltaX (- old-x px)
        angle (* (/ 180 Math/PI) (Math/atan (/ deltaY deltaX)))
        position (sapper :position)
        x (+ (first position) (* (Math/cos angle) (sapper :speed)))
        y (+ (second position) (* (Math/sin angle) (sapper :speed)))]
    (swap! entities assoc-in [id :position] [x y])
    (when (< (dist [x y] [px py]) 15)
      (sapper-explosion-at [x y])
      (swap! entities dissoc id)
      {:type :splash-damage :position [x y]}
    )))

(defmethod do-event :splash-damage [e]
  (prn e))

(defmethod do-event :shot-move [e]
    (let [move (e :shot-move)
          shot (@entities (e :id))
          position (shot :position)
          [x y w h] position
          x (+ x (* (Math/cos (shot :angle)) move ))
          y (+ y (* (Math/sin (shot :angle)) move ))]
          (swap! entities assoc-in [(e :id) :position] [x y w h])))

(defmethod do-event :shrapnel-move [e]
    (let [move (e :speed)
          shrapnel (@entities (e :id))
          position (shrapnel :position)
          [x y] position
          x (+ x (* (Math/cos (shrapnel :angle)) move ))
          y (+ y (* (Math/sin (shrapnel :angle)) move ))]
          (if-not (e :expire)
            (swap! entities assoc-in [(e :id) :position] [x y])
            (swap! entities dissoc (e :id)))))

(defmethod do-event :player-turn [e]
  (let [player (e :player)
        pid (player :id)
        angle (e :player-turn)]
    (swap! entities assoc-in [pid :angle]
           (+ angle (player :angle)))))

(defmethod do-event :damage [e]
  (let [id (get-in e [:entity :id])
        val (e :val)
        from-player-id (e :from-player-id)
        type (get-in @entities [id :type])
        score ({:sapper 10 :player 20} type)]
    (swap! entities update-in [id :health] #(- %1 val))
    (if (<= (get-in @entities [id :health]) 0)
      (do 
        (swap! entities update-in
               [from-player-id :score] (partial + score))
        {:type :death :entity (@entities id)})
      nil))) 

(defmethod do-event :death [e]
  (let [id (get-in e [:entity :id])
        position (get-in e [:entity :position])]
  (explosion-at position)  
  (swap! ai-agents dissoc (get-in e [:entity :id :ai-id]))
  (swap! entities dissoc id)
  (if (= id (player :id)) {:type :game-over})))

;; TODO: game over features let explosion finish etc
(defmethod do-event :game-over [e]
  (prn "game-over" e)
  (reset! playing false))

(defmethod do-event :hit [e]
  (let [{shot-id :shot-id
         from-player-id :from-player
         hit-entity :to} e]
    ;; TODO: move out to own function for reuse elsewhere
    (swap! entities
           update-in
           [(:id hit-entity) :transforms]
           conj {:started (e :timestamp)
                 :property :color
                 :type :random
                 :duration 300})
    (swap! entities update-in [from-player-id :hits] inc)
    (swap! entities dissoc shot-id)
    {:type :damage :from-player-id from-player-id :val 5 :entity hit-entity}))

;; check for legal moves like not oob, or other player hit
(defn legal? [player new-position]
  (let [p (assoc player :position new-position)
        pid (player :id)
        others (get-players-and-walls @entities)]
    (and (not (oob? new-position))
         (not-any? #(collision? p %1) (remove #(= (:id %1) pid) others)))))

(defmethod do-event :player-move [e]
  (let [p (e :player)
        old-position (p :position) 
        move (* (p :speed) (e :player-move))
        x (* (Math/cos (p :angle)) move )
        y (* (Math/sin (p :angle)) move )
        new-position [(+ x (first old-position)) (+ y (second old-position))]]
    (if (legal? p new-position)
       (swap! entities assoc-in [(p :id) :position] new-position))))

(defmethod do-event :shoot [e]
  (let [t (e :timestamp)
        player (:player e)
        id (:id player)
        x (get-in player [:position 0])
        y (get-in player [:position 1])]
    (when (can-shoot? player t) 
      (swap! entities update-in [id :shots] inc)
      (let [id (get-id)]
        (swap! entities assoc id {
          :id id 
          :type :shot 
          :from-player (player :id)
          :angle (player :angle) 
          :w 4
          :h 4
          :position [(+ 7 x) (+ 7 y)]}))
      (swap! entities assoc-in [id :last-shot] t))))


; these are events that just happen 
(defn get-world-events [timestamp] 
  (keep (fn [ent]
         ({:shot {:type :shot-move
                  :shot-move 3
                  :id (ent :id)}
           :shrapnel {:type :shrapnel-move
                      :speed (ent :speed)
                      :expire (< (ent :expire-length) (- timestamp (ent :time-in)))
                      :id (ent :id)}
           :sapper {:speed 0.5
                   :type :sapper-move
                   :id (ent :id)}
   } (ent :type))) (vals @entities)))

(defn handle-events [events] 
  (if (empty? events) nil
      (handle-events
       (keep do-event events))))
    
;; lame hit-detection
(defn detect-hits [timestamp]
  (mapcat (fn [s]
            (keep #(if (do (and (not= (%1 :id) (get-in s [:from-player]))
                            (collision? s %1)))
                     {:type :hit
                      :shot-id (s :id)
                      :from-player (s :from-player)
                      :timestamp timestamp
                      :to %1}
                    nil)
                 (get-players-and-walls @entities))
            ) (get-shots @entities)))

(defn detect-shot-oob [shots]
  (let [oob (filter #(oob? (%1 :position)) shots)]
    (apply (partial swap! entities dissoc)
           (map :id oob))))        

;; damage player
;;    normal weapon
;;       player moving
;;       player still
;; avoid
;;     
;; idle
;;   drive around
;; {:id (get-id)
;;  :player-id id
;;  :player-last-position []
;;  :player-last-angle []}
;; TODO: create events processed as normal
(defn handle-ai [timestamp]
  (let [human (@entities (player :id))
        position (human :position)
        angle (human :angle)]
    (keep (fn [ai-pair]
            (let [[id ai] ai-pair
                  cpu-player-id (ai :player-id)
                  cpu-player (@entities cpu-player-id)]
             (when cpu-player
                   ;(swap! ai-agents update-in [id :player-last-position] into [position])
                   ;(swap! ai-agents update-in [id :player-last-position] (partial take 200))
                   (swap! entities assoc-in
                          [cpu-player-id :angle]
                          (angle-at position (cpu-player :position)))
                   {:type :shoot
                    :timestamp timestamp
                    :player cpu-player}))) (seq @ai-agents))))

(defonce player-score (r/atom 0))

(defn update-world [keypresses timestamp]
  (let [press-list (seq
                    (select-keys
                     keypresses
                     (for [[k v] keypresses :when v] k)))
        player-events (->> press-list
                           (map #(player-key-map (first %1)))
                           (map #(assoc %1
                                        :timestamp timestamp
                                        :player (@entities (player :id)))))
        world-events (get-world-events timestamp)]
    (do 
        (if (@entities (player :id))
            (handle-events player-events))
        (handle-events world-events)
        (handle-events (handle-ai timestamp))
        (handle-events (detect-hits timestamp)) 
        ;; update reagent value
        (reset! player-score (get-in @entities [(player :id) :score]))
        (detect-shot-oob (get-shots @entities)))))

(defn random-color [timestamp c]
  (apply str (cons "#"
        (subs (sha1 (str (quot timestamp 90))) 0 3))))

;; TODO make generic with multimethod
(defn do-entity-transform [entities timestamp]
  ;{:started (e :timestamp) :property :color :type :random-color :duration 1000}
  (map (fn [e]
           (cond (not-empty (:transforms e))
                 ;; transform entity  
                 (reduce #(update-in %1 [(:property %2)]
                                     (partial random-color timestamp))
                         e (:transforms e))
                 :else e)) (vals entities)))


;; TODO: should this just be animations?
(defn expire-transforms [timestamp]
   (doseq [[id entity] (seq @entities)]
       (if-not (empty? (entity :transforms))
         (swap! entities update-in [id :transforms]
                (partial remove #(> (- timestamp (%1 :started)) (%1 :duration)))))))
    

(defn start
  "create the render loop for the game"
  []
  ;(.setInterval js/window (partial add-sapper speed-rate) 8000)
  (println "start called")
  ((fn render-loop [timestamp]
     (when @playing
       (swap! time-now #(do timestamp))
       (update-world @keypresses timestamp)
       (expire-transforms timestamp)
       (render/draw-world
          (do-entity-transform @entities timestamp))
       (.requestAnimationFrame js/window render-loop)))))

(defn blur-focus [& a]
  (.blur
    (.getElementById
    js/document
    "start")))

(defn toggle-start []
  (if-not @playing
    (do
        (reset! playing true)
        ((comp blur-focus 
               start)))
    (do (reset! playing false) (blur-focus))))

(defn app-ui []
  [:div#container
   [:div#title-bar
    [:h1#title "Tanks"]
    [:button#start {:on-click toggle-start} (if-not @playing "Play" "Pause")]]
   [:canvas#screen {:width WIDTH :height HEIGHT}]
   [:span#player-name "Player 1"]
   [:span#score @player-score]])

(defonce main
  (do
    (r/render-component [app-ui]
                        (js/document.getElementById "main"))
    (.addEventListener js/window "keydown"
       #(do (swap! keypresses
               assoc
               (key-map (aget %1 "keyCode")) true) false))
    (.addEventListener js/window "keyup"
       #(swap! keypresses
               assoc
               (key-map (aget %1 "keyCode")) false))))

