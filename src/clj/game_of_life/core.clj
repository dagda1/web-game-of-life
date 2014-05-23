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

(def compass-points [[0 1][1 1][1 0][1 -1][0 -1][-1 1][-1 0][-1 -1]])

(defn live-neighbours
  [outer-index index cell world]
    (reduce + (map (fn[[x y]]
            (let [cord-x (+ outer-index x)
                  cord-y (+ index y)
                  next-cell (get-in world [cord-x cord-y])]
                  (if next-cell
                    (if (= next-cell 1) 1 0)
                    0))) compass-points)))

(defn change
  [outer-index index cell world]
    (let [live-count (live-neighbours outer-index index cell world)]
      (cond
        (< live-count 2) 0
        (or (= live-count 2) (= live-count 3)) 1
        (and (= cell 2) (> live-count 3)) 0
        (and (= cell 1) (= live-count 3)) 1
        :else 0)))

(defn turn
  [index cell world]
    (mapv #(change index %1 %2 world) (range) cell))

(defn live
  [world]
    (mapv #(turn %1 %2 world) (range) world))

(defn orbit-world [dimensions ctx]
  (let [in (vec (json/parse-string (body-as-string ctx)))]
    {:world (live in)}))

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
    :put (fn [ctx] (println "does not get here ever, why?"))})
  :put! (fn [ctx] (orbit-world dimensions ctx))
  :handle-created (fn [ctx] (json/generate-string (:world ctx))))

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
