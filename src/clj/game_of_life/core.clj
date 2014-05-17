(ns game-of-life.core
  (:require
            [liberator.core :refer [resource defresource by-method]]
            [liberator.representation :refer :all]
            [cheshire.core :as json]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [defroutes ANY GET PUT]]
            [ring.util.response :as resp]
            [ring.adapter.jetty :as ring]
            [ring.middleware.params :refer [wrap-params]]
            [clojure.java.io :as io]))

(defn init-world [dimensions]
  (vec (repeat dimensions (vec (take dimensions (repeatedly #(rand-int 2)))))))

(defresource world [dimensions]
  :allowed-methods [:get :put]
  :available-media-types ["application/json"]
  :available-charsets ["utf-8"]
  :handle-ok (by-method {
    :get (json/generate-string (init-world dimensions))}))

(defroutes app
  (ANY "/" [] (resp/redirect "/index.html"))
  (GET "/world/:dimensions" [dimensions] (world (Integer/parseInt dimensions)))
  (PUT "/world/:world" [current] (println current))

  (route/resources "/"))

(defn start [port]
  (ring/run-jetty app {:port port :join? false}))

(defn -main []
  (let [port (Integer/parseInt
       (or (System/getenv "PORT") "3000"))]
  (start port)))
