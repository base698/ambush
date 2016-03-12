(ns tanks.core
 (:require [tanks.utils :refer [log]]))

(enable-console-print!)

(def WIDTH 800)
(def HEIGHT 600)

(defonce world { 
  :width WIDTH
  :height HEIGHT
})

(def x 1)

(def tank-id 1)

(defn get-id []
  (set! tank-id (inc tank-id)) tank-id)

(def first-id (get-id))

(defonce events (atom #{}))

(defn get-player [p c]
  {:id (get-id)
   :type :player
   :score 0
   :color c
   :health 100
   :position p
   :angle 0
   :last-shot 0
   :bombs 1})

(def player (atom (get-player [200, 200] "#072")))

(def entities (atom {first-id
                     {:id first-id
                      :type :ant
                      :position [400, 400]}}))


;;(defonce players (atom [player]))

(defonce key-map { 87 :w 
                   83 :s 
                   65 :a 
                   68 :d 
                   32 :space})

(defn add-ant []
  (let [id (get-id) ]
    (swap! entities 
      assoc entities 
      id {:id id
          :type :ant
          :position [(rand-int 400) (rand-int 400)]})))

;; todo finish
(defn add-player []
  (let [player (get-player [500 500] "#622")
        id (player :id)]
    (swap! entities assoc id player)))


(defonce player-key-map {:space {:shoot true} 
                         :w {:player-move 1.1} 
                         :s {:player-move -1.1} 
                         :a {:player-turn -0.1} 
                         :d {:player-turn 0.1}})

(defn ease-in-quad [x t b c d]
    (+ (* c (/ t d) (/ t d)) b))

(defn get-ctx [] 
  (let [canvas (.getElementById js/document "screen")
        ctx (.getContext canvas "2d")]
  ctx))

(defmulti draw-entity :type)

(defmethod draw-entity :shrapnel [p])

(defmethod draw-entity :player [p]
  (let [ctx (get-ctx)
        position (p :position)
        x (first position)
        y (second position)]
    (.save ctx)
    (set! (.-fillStyle ctx) (p :color))
    (.translate ctx (+ x  (/ 20 2)) (+ y (/ 20 2)))
    (.rotate ctx (p :angle))
    (.fillRect ctx -10 -10 20 20)
    (.fillRect ctx 8 -2 5 5)
    (.restore ctx)))

(defmethod draw-entity :shot [p]
  (let [ctx (get-ctx) position (p :position)]
    (.fillRect ctx (first position) (last position) 5 5)))

(defmethod draw-entity :ant [p]
  (let [ctx (get-ctx) position (p :position)]
    (.fillRect ctx (first position) (last position) 12 12)))

(defmethod draw-entity :wall [p])

(defn player-field! [field value]
  (swap! player assoc field value))

(defn player-position! [pos]
  (player-field! :position pos))

(def PI (.-PI js/Math))
(defn sin [a] (.sin js/Math a))
(defn atan [a] (.atan js/Math a))
(defn atan2 [a] (.atan2 js/Math a))
(defn cos [a] (.cos js/Math a))

(defn in-bounds? [x y] 
  (and (>= x -10) (< x WIDTH) (>= y -10) (< y HEIGHT)))

(defn can-shoot? [t]
  (> (- t (@player :last-shot)) 500))

(defn find-first [pred coll]
  (first (filter pred coll)))

(defn between? [a b]
   (and (>= a b) (<= a (+ b 5))))

(defn inc-score [] (swap! player update-in [:score] inc))

(defn get-y [ent] (second (:position ent)))

(defn get-x [ent] (first (:position ent)))

(defmulti do-event #(first (keys %1)))

(defmethod do-event :default [x])

; {:ant-move 3, :id 2}
(defmethod do-event :ant-move [e]
  (let [id (e :id) 
        ant (@entities id) 
        deltaY (- (get-y ant) (get-y @player))
        deltaX (- (get-x ant) (get-x @player))
        angle (* (/ 180 PI) (atan (/ deltaY deltaX)))
        position (ant :position)
        x (+ (first position) (* (cos angle) 1 ))
        y (+ (second position) (* (sin angle) 1 ))]
    (swap! entities assoc-in [id :position] [x y])))

(defmethod do-event :shot-move [e]
    (let [move (e :shot-move)
          shot (@entities (e :id))
          position (shot :position)
          x (+ (first position) (* (cos (shot :angle)) move ))
          y (+ (second position) (* (sin (shot :angle)) move ))]
          (swap! entities assoc-in [(e :id) :position] [x y])))

(defmethod do-event :player-turn [e]
  (let [angle (e :player-turn)]
    (player-field! :angle (+ angle (@player :angle)))))

(defmethod do-event :player-move [e]
  (let [old-position (@player :position) 
        move (e :player-move)
        x (* (cos (@player :angle)) move )
        y (* (sin (@player :angle)) move )
        arr [[x y] old-position]
        new-position [(+ x (first old-position)) (+ y (second old-position)) ]]
    (player-position! new-position)))

(defmethod do-event :shoot [e]
  (let [t (e :timestamp)
        x (get-in @player [:position 0])
        y (get-in @player [:position 1])]
    (when (can-shoot? t) 
      (let [id (get-id)]
        (swap! entities assoc id {
          :id id 
          :type :shot 
          :from-player (@player :id)
          :angle (@player :angle) 
          :position [(+ 7 x) (+ 7 y)]}))
        (player-field! :last-shot t))))

(defn draw-world []
  (let [ctx (get-ctx)]
    (.clearRect ctx 0 0 800 600)
    (do (draw-entity @player)
        (doseq [x (vals @entities)]
          (do (draw-entity x))))))

; these are events that just happen 
(defn get-world-events [timestamp] 
  (map (fn [ent]
         ({:shot {:shot-move 4
                  :id (ent :id)}
           ; :ant {:ant-move 3
           ; :id (ent :id)}
   } (ent :type))) (vals @entities)))

(defn handle-events [events] 
  (loop [x events]
      (do-event (first x))
      (if (empty? x) nil
      (recur (rest x)))))

;; see if another player was struck
(defn detect-hits [shots]
  (let [x 1]
    ;(prn shots)
    ))        

(defn get-shots [entities]
  (filter #(= :shot (%1 :type)) (vals entities)))

(defn oob? [p]
  (let [[x y] p]
    (or (> x WIDTH)
        (> y HEIGHT)
        (< x 0)
        (< y 0))))

(defn detect-shot-oob [shots]
  (let [oob (filter #(oob? (%1 :position)) shots)]
    (apply (partial swap! entities dissoc)
           (map :id oob))))        


(defn update-world [keypresses timestamp]
  (let [press-list (seq
                    (select-keys
                     keypresses
                     (for [[k v] keypresses :when v] k)))
        player-events (->> press-list
                           (map #(player-key-map (first %1)))
                           (map #(assoc %1 :timestamp timestamp)))
        world-events (get-world-events timestamp)]
    (do 
        ;; TODO collision detection
        (handle-events player-events)
        (handle-events world-events)
        (detect-hits (get-shots @entities))
        (detect-shot-oob (get-shots @entities)))))

  
(defn main []
    ; (.setInterval js/window add-ant 8000)
    (let [keypresses (atom {})]
        ((fn render-loop [timestamp]
           (update-world @keypresses timestamp)
           (draw-world)
            (.requestAnimationFrame js/window render-loop)))
        (.addEventListener js/window "keydown"
            #(swap! keypresses
                    assoc
                    (key-map (aget %1 "keyCode")) true))
        (.addEventListener js/window "keyup"
            #(swap! keypresses
                assoc
                (key-map (aget %1 "keyCode")) false))))
