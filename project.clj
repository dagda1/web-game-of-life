(defproject web-game-of-life "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies
  [
    [org.clojure/clojure "1.5.1"]
    [org.clojure/clojurescript "0.0-2173"]
    [org.clojure/core.async "0.1.267.0-0d7780-alpha"]

    [ring/ring-core "1.2.0"]
    [ring/ring-jetty-adapter "1.2.0"] ; Web Server https://github.com/ring-clojure/ring

    [cheshire "5.3.1"] ; JSON de/encoding https://github.com/dakrone/cheshire
    [liberator "0.11.0"]

    [compojure "1.1.8"] ; Web routing https://github.com/weavejester/compojure
    [liberator "0.11.0"] ; WebMachine (REST state machine) port to Clojure https://github.com/clojure-liberator/liberator

    [om "0.5.0"]
  ]

  :profiles {
    :test {
      :dependencies [
                     [midje "1.6.3"] ; Example-based testing https://github.com/marick/Midje
                     [ring-mock "0.1.2"]
                    ]
      :plugins [
                [lein-midje "3.1.3"] ; Example-based testing https://github.com/marick/lein-midje
                ]
    }
  }

  :aliases {
    "midje" ["with-profile" "test" "midje"] ; run unit tests
  }

  :plugins
  [
    [lein-cljsbuild "1.0.2"]
    [lein-ring "0.8.10"]
    [lein-midje "3.1.3"] ; Example-based testing https://github.com/marick/lein-midje
  ]

  :source-paths ["src/clj"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/js/application.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true
                :externs ["om/externs/react.js"]}}]}

  :ring {:handler game-of-life.core/app
         :init    game-of-life.core/init}

  :main game-of-life.core
)
