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

(defn player-move [xMove yMove]
  (let [position (player :position) x (first position) y (last position)]
   (set! player (assoc player :position [(+ x xMove) (+ y yMove)])))) 

(defn draw []
  (let [canvas (.getElementById js/document "screen") ctx (.getContext canvas "2d")
      position (player :position)]
    (.clearRect ctx 0 0 800 600)
    (.fillRect ctx (first position) (last position) 20 20))
)

(defn update-world [keypresses]
  (cond 
    (keypresses :w) (player-move 0 -1)
    (keypresses :s) (player-move 0 1)
    (keypresses :a) (player-move -1 0)
    (keypresses :d) (player-move 1 0)))

(defn ^:export main []
  (def keypresses {})
  (log "test")
  ((fn render-loop [] 
    (update-world keypresses) (draw)  
      (.requestAnimationFrame js/window render-loop)))
  (.addEventListener js/window "keydown" 
    #(set! keypresses 
        (assoc keypresses 
          (key-map (aget %1 "keyCode")) true)))
  (.addEventListener js/window "keyup" 
      #(set! keypresses 
        (assoc keypresses 
          (key-map (aget %1 "keyCode")) false))))

