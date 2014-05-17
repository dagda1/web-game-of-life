(ns game-of-life.unit.resources.world-retrieval
  (:require [midje.sweet :refer :all]))

  (with-state-changes [(before :facts (println "setup"))
                       (after :facts (println "teardown"))]

    (facts "about retrieving the world structure"

      (fact "the id is a String"
        (+ 1 1) => 3)

      ))
