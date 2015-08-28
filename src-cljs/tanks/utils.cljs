(ns tanks.utils) 

(defn quad-tree [max b]
  { :points []
    :max max
    :box b
    :north-east nil
    :south-east nil
    :south-west nil
    :north-west nil
   })
   
(def directions [:north-east :north-west :south-west :south-east])

(defrecord Box [x y w h])
(defrecord Point [x y])

(defn contained-in? [box p]
  (let [{px :x py :y} p {x :x y :y w :w h :h} box]
    (and (>= px x) (< px (+ x w)) 
         (>= py y) (< py (+ y h))))) 
  
(defn sub-divide [box]
  "return four new boxes contained within box"
  (let [{x :x y :y w :w h :h } box h2 (Math/floor (/ h 2)) w2 (Math/floor (/ w 2))]
  {
   :north-west (quad-tree 3 (Box. x y w2 h2))
   :north-east (quad-tree 3 (Box. (+ x w2) y w2 h2))
   :south-east (quad-tree 3 (Box. (+ x w2) (+ y h2) w2 h2))
   :south-west (quad-tree 3 (Box. x (+ y h2) w2 h2))
  }))

; find nested update-in like find
; use ->
(defn quad-tree-find [quad-tree p]
  (cond (point-in? (quad-tree :points) p) p
        (nil? (quad-tree :north-west)) nil
        :else
        (let [
              quad-tree (first (filter #(contained-in? (% :box) p) (map quad-tree directions)))]
         (quad-tree-find quad-tree p))))

(defn point-in? [points p]
      (some (partial = p) points))

(defn in-tree? [p tree]
  (contained-in? (tree :box) p))

(defn can-add? [node p]
  (< (count (node :points)) (node :max) ))

(defn find-quadrant [node p]
    (first (for [x (map (fn [x]
        (if (nil? (node x)) nil
            {x (node x)})) directions)
          :let [item (first (vals x))]
          :when (in-tree? p item)] x)))

(find-quadrant root-with-directions {:x 25 :y 25})

(defn quad-tree-insert [node x y]
  (let [box (node :box) p {:x x :y y}]
    (cond (can-add? node p)
          (update-in node [:points] conj p)
          :else
          (let [new-node (if (nil? (node :north-west))
             (merge
              node
              (sub-divide (node :box)) ) node)
             found (find-quadrant new-node p)
             quad (first (keys found))
             the-tree (first (vals found))]
           (assoc new-node quad (quad-tree-insert the-tree x y)) ))))
          

(def root (quad-tree 3 (Box. 0 0 100 100)))
(def regions (merge-with root (sub-divide (root :box)))
(def root-with-directions (merge-with (fn [x y] y) (quad-tree 3 root) (sub-divide (root :box))))
(def root-a (atom root))
