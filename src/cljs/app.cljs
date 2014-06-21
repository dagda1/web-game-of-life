(ns web-game-of-life.app
  (:require 
            [goog.net.XhrIo :as xhrio]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [put! <! >! chan timeout]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]))

(enable-console-print!)

(defn log [s]
  (.log js/console (str s)))

(def world-url "/world/")

(def app-state (atom {:world []}))

(defn get-world
  [dimensions]
  (let [url (str world-url dimensions)
        ch (chan)]
    (go (let [{world  :body} (<! (http/get url))]
          (>! ch (vec world))))
    ch))

(defn update-world
  [dimensions world]
  (let [url (str world-url dimensions)
        ch (chan)]
    (go (let [{updated-world :body} (<! (http/put url {:json-params world}))]
          (>! ch (vec  updated-world))))
      ch))

(defn cell [text]
  (reify
    om/IRender
      (render [this]
        (dom/td #js {:className (if (= text 1) "on" "off")} text))))

(defn row [data]
  (reify
    om/IRender
      (render [this]
        (apply dom/tr nil
          (om/build-all cell data)))))

(defn world-view [data owner opts]
  (reify
    om/IInitState
      (init-state [_]
        {:world [], :is-loaded false})

    om/IWillMount
      (will-mount [_]
        (go (while true
              (let [world (if (om/get-state owner :is-loaded)
                            (<! (update-world (:dimensions opts) (:world @data)))
                            (<! (get-world (:dimensions opts))))]

                  (when-not (om/get-state owner :is-loaded)
                    (om/set-state! owner :is-loaded true))

                  (om/transact! data #(assoc % :world world))
                  (swap! app-state assoc :world world))

              (<! (timeout (:poll-interval opts))))))

    om/IRender
      (render [_]
        (apply dom/table nil
          (om/build-all row (:world data))))))

(defn get-dimensions []
  (Math/round (/ (.-innerWidth js/window) 30)))

(defn start-app [data owner]
  (reify
    om/IRender
      (render [this]
        (dom/div nil
          (dom/h1 nil "Game Of Life")
          (om/build world-view data {:opts {:dimensions (get-dimensions)
                                            :poll-interval 2000}})))))

(om/root
  start-app
  app-state
  {:target (. js/document (getElementById "app"))})
