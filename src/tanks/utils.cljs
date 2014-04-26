(ns tanks.utils) 

(defn log [x]
  (if x
  (.log js/console (pr-str x))
  (.log js/console x)
  )
  )

