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

(defn draw-frame [world]
  (let 
    [canvas (.getElementById js/document "main") ctx (.getContext canvas "2d")]
   ))


(defn ^:export main []
  (def keypresses {})
  (let [body (.getElementById js/document "main")]
    (.setInterval js/window #(log keypresses) 2000)
    (.addEventListener js/window "keydown" 
      #(set! keypresses 
          (assoc keypresses 
            (key-map (aget %1 "keyCode")) true)))
    (.addEventListener js/window "keyup" (fn [event] ))))

