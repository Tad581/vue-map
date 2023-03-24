export const coordinates = [
  [
    [105.8048, 20.9952],
    [105.7842, 21.0163],
    [105.7954, 21.0299],
  ],
  [
    [105.785663, 20.976155],
    [105.798071, 20.980152],
    [105.804299, 20.976986],
    [105.788452, 20.999155],
  ],
  [
    [105.769992, 20.981142],
    [105.759029, 20.994633],
    [105.77588, 21.016382],
  ],
];

export const place_point = [20, 30, 10];

import { Fill, Stroke, Style } from "ol/style.js";

export const styles = {
  red: new Style({
    fill: new Fill({
      color: "red",
    }),
    stroke: new Stroke({
      color: "white",
    }),
  }),

  blue: new Style({
    fill: new Fill({
      color: "blue",
    }),
    stroke: new Stroke({
      color: "white",
    }),
  }),

  yellow: new Style({
    fill: new Fill({
      color: "yellow",
    }),
    stroke: new Stroke({
      color: "white",
    }),
  }),
};
