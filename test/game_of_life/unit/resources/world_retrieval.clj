(ns game-of-life.unit.resources.world-retrieval
  (:require
    [cheshire.core :as json]
    [game-of-life.core])
  (:use
   [liberator.representation :only [->when]]
   [ring.mock.request :only [request header]]
   [compojure.core :only [ANY GET PUT]]
   [liberator.core  :only [resource with-console-logger]]
   [midje.sweet :only [fact facts truthy against-background contains future-fact future-facts defchecker tabular before with-state-changes]]
   [checkers]))

(with-state-changes [(before :facts (println "setup"))
                     (after :facts (println "teardown"))]

  ; (facts "Get initial world"
  ;   (let [handler (GET "/" [] (game-of-life.core/world "3") )
  ;         response (handler (request :get "/"))]
  ;     ; (println (vec (json/parse-string (response :body))))
  ;     response => OK
  ;     response => (content-type "application/json;charset=UTF-8")))

  (facts "Update the world to get a new view"
    (let [world (json/generate-string [[1 0 1] [0 0 1] [1 0 0]])
          response ((game-of-life.core/world "3") (-> (request :put "/")
                   (assoc :body world)
                   (header "content-type" "application/json")))]
      (println (json/parse-string (response :body)))
      response => OK
      response => (content-type "application/json;charset=UTF-8"))))
