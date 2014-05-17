(ns game-of-life.unit.resources.world-retrieval
  (:require game-of-life.core)
  (:use
   [liberator.representation :only [->when]]
   [ring.mock.request :only [request header]]
   [compojure.core :only [ANY]]
   [liberator.core  :only [resource with-console-logger]]
   [midje.sweet :only [fact facts truthy against-background contains future-fact future-facts defchecker tabular before with-state-changes]]
   [checkers]))

(with-state-changes [(before :facts (println "setup"))
                     (after :facts (println "teardown"))]

  (facts "Get initial world"
    (let [handler (ANY "/" [] game-of-life.core/get-world)
          response (handler (request :get "/3"))]
      (println response)
      response => OK
      response => (content-type "application/json;charset=UTF-8")
      )))