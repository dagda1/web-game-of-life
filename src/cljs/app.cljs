(ns web-game-of-life.app
  (:require 
            [goog.net.XhrIo :as xhrio]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [chan close!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]))

(enable-console-print!)

(defn log [s]
  (.log js/console (str s)))

(def app-state (atom {:world [[0 1 0] [1 0 0] [0 0 1]]}))

(defn cell [text]
  (reify
    om/IRender
      (render [this]
        (dom/td nil text))))

(defn row [data]
  (reify
    om/IRender
      (render [this]
        (apply dom/tr nil
          (om/build-all cell data)))))

(defn world-view [data]
  (reify
    om/IRender
      (render [this]
        (apply dom/table nil
          (om/build-all row (:world data))))))

(defn start-app [data owner]
  (reify
    om/IRender
      (render [this]
        (dom/div nil
          (dom/h1 nil "Game Of Life")
          (om/build world-view data)))))

(om/root
  start-app
  app-state
  {:target (. js/document (getElementById "app"))})
