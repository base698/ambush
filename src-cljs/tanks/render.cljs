(ns tanks.render)
  ;; (:require
  ;;   [reagent.core :as r]
  ;;   [tanks.render :as render]
  ;;   [tanks.utils :refer [log]]))


(defn get-ctx [] 
  (let [canvas (.getElementById js/document "screen")
        ctx (.getContext canvas "2d")]
  ctx))

;;; rendering code

(defmulti draw-entity :type)

(defmethod draw-entity :default [e] (prn e))

(defmethod draw-entity :shrapnel [p]
  (let [ctx (get-ctx)
        position (p :position)
        [x y] position
        w (p :w)
        h (p :h)]
    (.save ctx)
    (set! (.-fillStyle ctx) (p :color))
    (.beginPath ctx)
    (.arc ctx x y 2 6 0 (* 2 Math/PI))
    (.fill ctx)
    (.restore ctx)))

(defmethod draw-entity :player [p]
  (let [ctx (get-ctx)
        position (p :position)
        x (first position)
        y (second position)
        w (p :w)
        h (p :h)]
    (.save ctx)
    (set! (.-fillStyle ctx) (p :color))
    (.translate ctx (+ x  (/ w 2)) (+ y (/ h 2)))
    (.rotate ctx (p :angle))
    (.fillRect ctx -10 -10 w h)
    (.fillRect ctx 8 -2 5 5)
    (.restore ctx)))

(defmethod draw-entity :shot [e]
  (let [ctx (get-ctx)
        position (e :position)
        [x y] position
        w (e :w)
        h (e :h)]
    (.fillRect ctx x y w h)))

(defmethod draw-entity :sapper [p]
  (let [ctx (get-ctx) position (p :position)]
    (.save ctx)
    (if (p :color) (set! (.-fillStyle ctx) (p :color)))
    (.fillRect ctx (first position) (last position) (p :w) (p :h))
    (.restore ctx)))

(defmethod draw-entity :wall [p])

(defn draw-world [entities]
  (let [ctx (get-ctx)]
    (.clearRect ctx 0 0 800 600)
      (doseq [x entities]
          (do (draw-entity x)))))

