(ns game-of-life.core
  (:require
            [liberator.core :refer [resource defresource by-method]]
            [liberator.representation :refer :all]
            [liberator.dev :refer (wrap-trace)]
            [cheshire.core :as json]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [defroutes ANY GET PUT]]
            [ring.util.response :as resp]
            [ring.adapter.jetty :as ring]
            [ring.middleware.params :refer [wrap-params]]
            [clojure.java.io :as io]))

(defn body-as-string [ctx]
  (if-let [body (get-in ctx [:request :body])]
    (condp instance? body
      java.lang.String body
      (slurp (io/reader body)))))

(defn orbit-world [dimensions ctx]
  (let [in (vec (json/parse-string (body-as-string ctx)))]
    {:world in}))

(defn init-world [params]
  (let [dimensions (Integer/parseInt params)
     world (vec (repeat dimensions (vec (take dimensions (repeatedly #(rand-int 2))))))]
    (json/generate-string world)))

(defresource world [dimensions]
  :allowed-methods [:get :put]
  :available-media-types ["application/json"]
  :available-charsets ["utf-8"]
  :handle-ok (by-method {
    :get (fn [ctx] (init-world dimensions))
    :post (fn [ctx] (println str "here" ctx))})
  :put! (fn [ctx] (orbit-world dimensions ctx)))

(defroutes app
  (ANY "/" [] (resp/redirect "/index.html"))
  (ANY "/world/:dimensions" [dimensions] (world dimensions))

  (route/resources "/"))

(def handler
  (-> app
      (wrap-trace :header :ui)))

(defn start [port]
  (ring/run-jetty #'handler {:port port :join? false}))

(defn -main []
  (let [port (Integer/parseInt
       (or (System/getenv "PORT") "3000"))]
  (start port)))
