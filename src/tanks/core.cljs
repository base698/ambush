(ns tanks.core
 (:use [tanks.utils :only [log]]))

(def world { 
  :width 800 
  :height 600 
  :entities []
})

(def player {
  :score 0
  :health 100
  :position [10,10]
  :angle 0
  :velocity 0
  :bombs 1})

(def shot {
  :angle 0
  :velocity 0
  :position [0,0]
})

(def key-map { 87 :w 83 :s 65 :a 68 :d 32 :space})
(def event-move-map {:w {:move [0 -1]} :s {:move [0 1]} :a {:move [-1 0]} :d {:move [1 0]}})

(defn player-position! [pos]
  (set! player (assoc player :position pos)))

(defn player-move [events]
  (if (> (count events) 0) 
     (player-position! (reduce (fn [x y]
      (let [coord (y :move)]
        [(+ (first x) (first coord)) (+ (second x) (second coord))] 
      )) (player :position) events ))))

(defn draw []
  (let [canvas (.getElementById js/document "screen") ctx (.getContext canvas "2d")
      position (player :position)]
    (.clearRect ctx 0 0 800 600)
    (.fillRect ctx (first position) (last position) 20 20)))

(defn update-world [keypresses timestamp]
    (let [press-list (seq keypresses)]
     (player-move
          (keep 
              #(if (second %1) 
                 (assoc (event-move-map (first %1)) :timestamp timestamp)) press-list))))

(defn ^:export main []
  (def keypresses {})
  ((fn render-loop [timestamp] 
    (update-world keypresses timestamp) (draw)  
      (.requestAnimationFrame js/window render-loop)))
  (.addEventListener js/window "keydown" 
    #(set! keypresses 
        (assoc keypresses 
          (key-map (aget %1 "keyCode")) true)))
  (.addEventListener js/window "keyup" 
      #(set! keypresses 
        (assoc keypresses 
          (key-map (aget %1 "keyCode")) false))))

