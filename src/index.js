// Public health facilities in sub Saharan Africa

// Data: https://springernature.figshare.com/articles/Public_health_facilities_in_sub_Saharan_Africa/7725374/1

import { Scene, PointLayer } from "@antv/l7";
import { Mapbox, GaodeMap } from "@antv/l7-maps";

const scene = new Scene({
  id: "map",
  map: new Mapbox({
    pitch: 0,
    style: "dark",
    center: [20, -3.69],
    zoom: 2.5
  })
});

fetch(
  "https://gw.alipayobjects.com/os/basement_prod/c02f2a20-9cf8-4756-b0ad-a054a7046920.csv"
)
  .then(res => res.text())
  .then(data => {
    const pointLayer = new PointLayer({})
      .source(data, {
        parser: {
          type: "csv",
          x: "Long",
          y: "Lat"
        }
      })
      .size(0.6)
      .color("#ffa842")
      .style({
        opacity: 1
      });

    scene.addLayer(pointLayer);
  });
