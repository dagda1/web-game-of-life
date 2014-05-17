(ns game-of-life.unit.resources.world-retrieval
  (:require [midje.sweet :refer :all]))

  (with-state-changes [(before :facts (println "setup"))
                       (after :facts (println "teardown"))]

    (facts "about retrieving the world structure"

      (fact "1 + 1 does not always equal 2"
        (+ 1 1) => 3)

      ))
