(ns web-game-of-life.app
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

;; (def app-state (atom [[1 2 1] [2 1 1] [1 2 1]]))

(def app-state (atom {:world [1 2 1]}))

(defn cell
  [text]
  (om/component
    (dom/td nil text)))

(defn world-view
  [data owner]
    (om/component
      (dom/table nil
        (apply dom/tr nil
          (om/build-all cell (:world data))))))

(om/root
  world-view
  app-state
  {:target (. js/document (getElementById "app"))})
