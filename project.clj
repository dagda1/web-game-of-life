(defproject web-game-of-life "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies
  [
    [org.clojure/clojure "1.5.1"]
    [org.clojure/clojurescript "0.0-2173"]
    [org.clojure/core.async "0.1.267.0-0d7780-alpha"]

    [ring/ring-core "1.2.0"]

    [compojure "1.1.6"]
    [liberator "0.11.0"]

    [om "0.5.0"]
    [secretary "1.1.0"]
  ]

  :plugins
  [
    [lein-cljsbuild "1.0.2"]
    [lein-ring "0.8.10"]
  ]

  :source-paths ["src/clj"]

  ;https://github.com/jalehman/react-tutorial-om

  :ring {:handler game-of-life.core/app
         :init    game-of-life.core/init}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/js/application.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true
                :externs ["om/externs/react.js"]}}]}
)
