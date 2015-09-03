(defproject tanks "0.0.3"
  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.3.8"]
            [environ/environ.lein "0.3.1"]]
  :dependencies [[compojure "1.4.0"]
    [ring/ring-jetty-adapter "1.4.0"]
    [environ "1.0.0"]
    [org.clojure/clojure "1.7.0"]
    [org.clojure/clojurescript "1.7.48"]
    [org.clojure/tools.nrepl "0.2.3"]]
  :uberjar-name "clojure-getting-started-standalone.jar"
  :hooks [environ.leiningen.hooks]
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src-cljs"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "out/tanks.js"  
          :optimizations :whitespace
                   :pretty-print true}}]})
