(ns tanks.core (:require [tanks.utils :as utils]))
(def world { 
  :width 800 
  :height 600 
  :players []
})

(def player {
  :score 0
  :health 100
  :position [10,10]
  :bombs 1})

(defn hook-events []
  (let [body (.getElementById js/document "main")]
    (utils/log body)
  (.addEventListener body "keypress" (fn [& args] )
    (utils/log player)
  )))

(defn ^:export main [canvas]
  (hook-events))

