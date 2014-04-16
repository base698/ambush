(ns tanks.utils) 

(defn log [x]
  (.log js/console (pr-str x)))

