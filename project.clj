(defproject tanks "0.0.3"
  :plugins [[lein-figwheel "0.5.0-6"]
            [lein-cljsbuild "1.1.3"]]
  :clean-targets [:target-path "out"]
  :dependencies [
    [org.clojure/clojure "1.8.0"]
    [reagent "0.6.0-alpha"]
    [cljs-hash "0.0.2"]
    [org.clojure/clojurescript "1.7.228"]]
  :cljsbuild {
              :builds {:prod {:id "prod"
                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src-cljs"]
                        ; The standard ClojureScript compiler options:
                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                        :output-to "resources/public/main.js"  
                        :asset-path "out"
                        :main "tanks.core"
                        :optimizations :advanced}}
                       :dev {:id "dev"
                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src-cljs"]
                        :figwheel true
                        ; The standard ClojureScript compiler options:
                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                        :output-to "resources/public/main.js"  
                        :asset-path "out"
                        :main "tanks.core"
                        :optimizations :none
                        :pretty-print true}}}})
