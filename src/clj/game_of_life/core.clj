(ns game-of-life.core
  (:require 
            [liberator.core :refer [resource defresource]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [defroutes ANY GET]]
            [ring.util.response :as resp]
            [ring.adapter.jetty :as ring]
            [ring.middleware.params :refer [wrap-params]]
            [clojure.java.io :as io]))

(defroutes app
  (GET "/" [] (resp/redirect "/index.html"))

  (route/resources "/"))

(def handler
  (-> app
      (wrap-params)))

(ring/run-jetty #'handler {:port 3000})

