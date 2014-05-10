(defproject web-game-of-life "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies
  [
    [org.clojure/clojure "1.5.1"]
    [org.clojure/clojurescript "0.0-2173"]
    [org.clojure/core.async "0.1.267.0-0d7780-alpha"]

    [ring/ring-jetty-adapter "1.2.0"]
    [com.keminglabs/jetty7-websockets-async "0.1.0"]

    [compojure "1.1.6"]
    [liberator "0.11.0"]

    [om "0.5.0"]
    [secretary "1.1.0"]
  ]

  :plugins
  [
    [lein-cljsbuild "1.0.2"]
  ]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "dev"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]}

  :main ^{:skip-aot true} session.main
)
