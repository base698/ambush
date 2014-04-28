(ns tanks.core
 (:use [tanks.utils :only [log]]))

(def WIDTH 800)
(def HEIGHT 600)
(def world { 
  :width WIDTH
  :height HEIGHT
  :entities []
})

(def tank-id 1)
(defn get-id []
  (set! tank-id (inc tank-id)) tank-id)

; TODO: make hash by id
(def entities [{:id (get-id) :type :ant :position [400, 400]}])

(def player {
  :type :player
  :score 0
  :health 100
  :position [200,200]
  :angle 0
  :last-shot 0
  :bombs 1})

(def key-map { 87 :w 
               83 :s 
               65 :a 
               68 :d 
               32 :space})

(def player-key-map {
    :space {:shoot true} 
    :w {:player-move 1.1} 
    :s {:player-move -1.1} 
    :a {:player-turn -0.1} 
    :d {:player-turn 0.1}})

(defn ease-in-quad [x t b c d]
    (+ (* c (/ t d) (/ t d)) b))

(defn get-ctx [] 
  (let [canvas (.getElementById js/document "screen") ctx (.getContext canvas "2d")]
  ctx))

(defmulti draw-entity :type)

(defmethod draw-entity :player [p]
  (let [ctx (get-ctx) position (p :position) x (first position) y (second position)]
    (.save ctx)
    (.translate ctx (+ x  (/ 20 2)) (+ y (/ 20 2)))
    (.rotate ctx (player :angle))
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

(defn collision? [a b])
(defmulti collision :type)

(defn player-position! [pos]
  (set! player (assoc player :position pos)))

(defn sin [a] (.sin js/Math a))
(defn cos [a] (.cos js/Math a))

(defn choose [a b id] 
   (if (= id (a :id)) b a))

(defn in-bounds? [x y] 
  (and (> x 0) (< x WIDTH) (> y 0) (< y HEIGHT)))

(defn can-shoot? [t]
  (> (- t (player :last-shot)) 500))

(defn find-first [pred coll]
  (first (filter pred coll)))

(defn between? [a b]
   (and (> a b) (< a (+ b 5))))

(defn detect-hit [x y] 
  (find-first (fn [e] 
    (let [pos (e :position) aX (first pos) aY (second pos)]
    (and (or (between? x aX) (between? (+ x 5) aX)  )
    (or (between? y aY) (between? (+ y 5) aY)  ))
    )) (filter #(= :ant (%1 :type)) entities)))

(defn remove-entities [ids]
  (set! entities (for [ent entities :when (not-any? #(= %1 (ent :id)) ids)] ent)))

(defn increase-score [] (set! player (assoc player :score (inc (player :score)) )))

(defmulti do-event #(first (keys %1)))
(defmethod do-event :default [x])
(defmethod do-event :shot-move [e]
    (let [move (e :shot-move)
      shot (first (filter #(= (e :id) (%1 :id)) entities))
      ]
      (cond shot
        (let [
          position (shot :position)
          x (+ (first position) (* (cos (shot :angle)) move ))
          y (+ (second position) (* (sin (shot :angle)) move ))
          new-shot (assoc shot :position [x y])
          hit-ant (apply detect-hit (new-shot :position))
          ]
        
        (when hit-ant (remove-entities [(hit-ant :id) (new-shot :id)]) (increase-score))
        (set! entities (for [ent entities :when (let [pos (ent :position) shotX (first pos) shotY (second pos)] 
        (in-bounds? shotX shotY))] (choose ent new-shot (e :id))))))))

(defmethod do-event :player-turn [e]
  (let [angle (e :player-turn)]
    (set! player (assoc player :angle (+ angle (player :angle))))))

(defmethod do-event :player-move [e]
  (let [old-position (player :position) 
        move (e :player-move)
        x (* (cos (player :angle)) move )
        y (* (sin (player :angle)) move )
        arr [[x y] old-position]
        new-position [(+ x (first old-position)) (+ y (second old-position)) ]]
    (player-position! new-position)))

(defmethod do-event :shoot [x]
  (let [t (x :timestamp) x (first (player :position)) y (second (player :position))]
    (when (can-shoot? t) 
    (let []
      (set! entities (conj entities {
        :id (get-id) 
        :type :shot 
        :angle (player :angle) 
        :position [(+ 7 x) (+ 7 y)]
      })))
    (set! player (assoc player :last-shot t))
    )))

(defn draw-world []
  (let [ctx (get-ctx)]
    (.clearRect ctx 0 0 800 600)
    (do (draw-entity player) (doseq [x entities] (draw-entity x) ) )))

(defn get-world-events [timestamp] 
   (let [
    world-events (map #(if (and true (= (%1 :type) :shot)) {:shot-move 4 :id (%1 :id)}) entities)]

    world-events))

(defn handle-events [events] 
  (loop [x events]
      (do-event (first x))
      (if (empty? x) nil
      (recur (rest x)))))

(defn update-world [keypresses timestamp]
    (let [
      press-list (seq (select-keys keypresses (for [[k v] keypresses :when v] k)))
      player-events (->> press-list
        (map #(player-key-map (first %1)))
        (map #(assoc %1 :timestamp timestamp)))
      world-events (get-world-events timestamp)]
     (handle-events (concat player-events world-events))) )

(defn ^:export main []
  (def keypresses {})
  ((fn render-loop [timestamp] 
    (update-world keypresses timestamp) (draw-world)  
      (.requestAnimationFrame js/window render-loop)))
  (.addEventListener js/window "keydown" 
    #(set! keypresses 
        (assoc keypresses 
          (key-map (aget %1 "keyCode")) true)))
  (.addEventListener js/window "keyup" 
      #(set! keypresses 
        (assoc keypresses 
          (key-map (aget %1 "keyCode")) false))))

