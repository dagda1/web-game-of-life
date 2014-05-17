(ns checkers
  "contains midje checkers to test ring responses"
  (:use midje.sweet
        [clojure.string :only (lower-case)]
        [clojure.tools.trace :only (trace)]))

(defchecker is-status [code]
  (contains {:status code}))

(defchecker body [expected]
  (contains {:body expected}))

(defchecker header-value [header expected]
  (fn [actual]
    (= (get-in actual [:headers header]) expected)))

(defchecker content-type [expected]
  (header-value "Content-Type" expected))

(def OK (is-status 200))
