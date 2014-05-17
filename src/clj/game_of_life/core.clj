(ns game-of-life.core
  (:require
            [liberator.core :refer [resource defresource]]
            [liberator.representation :refer :all]
            [cheshire.core :as json]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [defroutes ANY GET]]
            [ring.util.response :as resp]
            [ring.adapter.jetty :as ring]
            [ring.middleware.params :refer [wrap-params]]
            [clojure.java.io :as io]))

(defn init-world [dimensions]
  (vec (repeat dimensions (vec (take dimensions (repeatedly #(rand-int 2)))))))

(defresource get-world [dimensions]
  :available-media-types ["application/json"]
  :available-charsets ["utf-8"]
  :handle-ok (json/generate-string (init-world dimensions)))

(defroutes app
  (ANY "/" [] (resp/redirect "/index.html"))
  (ANY "/get-world/:dimensions" [dimensions] (get-world (Integer/parseInt dimensions)))

  (route/resources "/"))

(defn start [port]
  (ring/run-jetty app {:port port :join? false}))

(defn -main []
  (let [port (Integer/parseInt
       (or (System/getenv "PORT") "3000"))]
  (start port)))
