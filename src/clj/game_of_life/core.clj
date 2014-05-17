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

; (defn orbit-world [current ctx]
;   {print-ln 
;   (json/generate-string current))
; 
(defn init-world [dimensions]
  (let [world (vec (repeat dimensions (vec (take dimensions (repeatedly #(rand-int 2))))))]
    (json/generate-string world)))


(defresource world [dimensions]
  :allowed-methods [:get :put]
  :available-media-types ["application/json"]
  :available-charsets ["utf-8"]
  :handle-ok (by-method {
    :get (fn [_] (init-world dimensions))}))
    ; :get (json/generate-string (init-world dimensions))
    ; :put (fn [ctx] (orbit-world dimensions ctx))}))

(defroutes app
  (ANY "/" [] (resp/redirect "/index.html"))
  (ANY "/world/:dimensions" [dimensions] (world (Integer/parseInt dimensions)))
  ; (PUT "/world/:world" [current] (println current) (world (vec (json/parse-string current))))
  ; (GET "/world/:dimensions" [dimensions] (world (Integer/parseInt dimensions)))

  (route/resources "/"))

(defn start [port]
  (ring/run-jetty app {:port port :join? false}))

(defn -main []
  (let [port (Integer/parseInt
       (or (System/getenv "PORT") "3000"))]
  (start port)))
