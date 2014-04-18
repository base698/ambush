(ns tanks.core
 (:use [tanks.utils :only [log]]))

(def world { 
  :width 800 
  :height 600 
  :entities []
})

(def entities [])

(def player {
  :type :player
  :score 0
  :health 100
  :position [10,10]
  :angle 0
  :velocity 0
  :bombs 1})

(def key-map { 87 :w 83 :s 65 :a 68 :d 32 :space})

(def player-key-map {:space {:shoot true} :w {:player-move [0 -1]} :s {:player-move [0 1]} :a {:player-move [-1 0]} :d {:player-move [1 0]}})

(defn ease-in-quad [x t b c d]
    (+ (* c (/ t d) (/ t d)) b))

(defn get-ctx [] 
  (let [canvas (.getElementById js/document "screen") ctx (.getContext canvas "2d")]
  ctx))

(defmulti draw-entity :type)
(defmethod draw-entity :player [p]
  (let [ctx (get-ctx) position (p :position)]
      (.fillRect ctx (first position) (last position) 20 20)))
(defmethod draw-entity :shot [p]
  (let [ctx (get-ctx) position (p :position)]
    (log p)
    (.fillRect ctx (first position) (last position) 5 5)))
(defmethod draw-entity :wall [p])

(defn collision? [a b])
(defmulti collision :type)

(defn player-position! [pos]
  (set! player (assoc player :position pos)))

(defmulti do-event #(-> %1 keys first))
(defmethod do-event :default [x])
(defmethod do-event :player-move [e]
  (let [old-position (player :position) 
        move (e :player-move)
        new-position (->> [move old-position]
            (map #(+ (first %1) (second %1))))]
            (partial partition 2)
            apply 
            interleave
    (player-position! new-position)))

(defmethod do-event :shoot [x]
  (let [player-position (player :position)]
    (set! entities (conj entities {:type :shot :position player-position}))))

(defn draw-world []
  (let [ctx (get-ctx)]
    (.clearRect ctx 0 0 800 600)
    (do (draw-entity player) (doseq [x entities] (draw-entity x) ) )))

(defn get-world-events [timestamp] 
   (keep #(if (= (%1 :type) :shoot) {:shot-move [0 -1]}) entities))

(defn handle-events [events] 
  (loop [x events]
      (do-event (first x))
      (if (empty? x) nil
      (recur (rest x)))))

(defn update-world [keypresses timestamp]
    (let [
      press-list (seq (select-keys keypresses (for [[k v] keypresses :when v] k)))
      player-events (->> press-list
        (keep #(player-key-map (first %1)))
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

