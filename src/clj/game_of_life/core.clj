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
  (ANY "/" [] (resp/redirect "/index.html"))

  (route/resources "/"))

(defn start [port]
  (ring/run-jetty app {:port port :join? false}))

(defn -main []
  (let [port (Integer/parseInt
       (or (System/getenv "PORT") "3000"))]
  (start port)))
