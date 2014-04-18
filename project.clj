(defproject tanks "0.0.3"
  :plugins [[lein-cljsbuild "1.0.3"]]
  :dependencies [
      [org.clojure/clojurescript "0.0-2197"]
      [org.clojure/tools.nrepl "0.2.3"]]
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "out/tanks.js"  
          :optimizations :whitespace
          :pretty-print true}}]})
