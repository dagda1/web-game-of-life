(ns game-of-life.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [ring.util.response :as resp]
            [clojure.java.io :as io]))

(defn init
  []
  (println "init"))

(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html"))

  (route/resources "/"))

(def app
  (-> #'app-routes
      handler/api))
