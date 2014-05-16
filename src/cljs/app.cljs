(ns web-game-of-life.app
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {:world [[1 2 1] [2 1 1] [1 1 2]]}))

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

(defn world-view [data owner]
  (reify
    om/IRender
      (render [this]
        (dom/div nil
          (dom/h2 nil "Game Of Life")
          (apply dom/table nil
            (om/build-all row (:world data)))))))

(om/root
  world-view
  app-state
  {:target (. js/document (getElementById "app"))})
