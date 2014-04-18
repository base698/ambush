(ns tanks.core
 (:use [tanks.utils :only [log]]))

(def world { 
  :width 800 
  :height 600 
  :entities []
})

(def tank-id 1)
(defn get-id []
  (set! tank-id (inc tank-id)) tank-id)

(def entities [])

(def player {
  :type :player
  :score 0
  :health 100
  :position [200,200]
  :angle 0
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
  (let [ctx (get-ctx) position (p :position)]
      (.fillRect ctx (first position) (last position) 20 20)))
      ;(.rotate ctx 0)))

(defmethod draw-entity :shot [p]
  (let [ctx (get-ctx) position (p :position)]
    (.fillRect ctx (first position) (last position) 5 5)))
(defmethod draw-entity :wall [p])

(defn collision? [a b])
(defmulti collision :type)

(defn player-position! [pos]
  (set! player (assoc player :position pos)))

(defn sin [a] (.sin js/Math a))
(defn cos [a] (.cos js/Math a))

(defn choose [a b id] 
   (if (= id (a :id)) b a))

(defmulti do-event #(first (keys %1)))
(defmethod do-event :default [x])

(defmethod do-event :shot-move [e]
    (let [move (e :shot-move)
      shot (first (for [x entities :when (= (e :id) (x :id))] x))
      position (shot :position)
      x (+ (first position) (* (cos (shot :angle)) move ))
      y (+ (second position) (* (sin (shot :angle)) move ))
    new-shot (assoc shot :position [x y])]
    (set! entities (for [x entities] (choose x new-shot (e :id))))
   ))

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
  (let [player-position (player :position)]
    (set! entities (conj entities {:id (get-id) :type :shot :angle (player :angle) :position player-position}))))

(defn draw-world []
  (let [ctx (get-ctx)]
    (.clearRect ctx 0 0 800 600)
    (do (draw-entity player) (doseq [x entities] (draw-entity x) ) )))

(defn get-world-events [timestamp] 
   (let [world-events (map #(if (= (%1 :type) :shot) {:shot-move 4 :id (%1 :id)}) entities)]
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

