import{r as o,d as l,o as e,c as t,b as r,w as i,F as n}from"./app.6d9b5d69.js";const a={setup:()=>({center:o([40,40]),projection:o("EPSG:4326"),zoom:o(8),rotation:o(0),radius:o(40),strokeWidth:o(10),strokeColor:o("red"),fillColor:o("white"),coordinate:o([40,40])})};a.render=function(o,a,s,c,d,u){const f=l("ol-view"),p=l("ol-source-osm"),m=l("ol-tile-layer"),h=l("ol-geom-point"),_=l("ol-style-fill"),y=l("ol-style-stroke"),k=l("ol-style-circle"),w=l("ol-style"),g=l("ol-feature"),j=l("ol-source-vector"),C=l("ol-vector-layer"),v=l("ol-map");return e(),t(n,null,[r("button",{onClick:a[1]||(a[1]=()=>c.coordinate=c.coordinate.map((o=>o+.01)))},"changecoor"),r(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:i((()=>[r(f,{ref:"view",center:c.center,rotation:c.rotation,zoom:c.zoom,projection:c.projection},null,8,["center","rotation","zoom","projection"]),r(m,null,{default:i((()=>[r(p)])),_:1}),r(C,null,{default:i((()=>[r(j,null,{default:i((()=>[r(g,null,{default:i((()=>[r(h,{coordinates:c.coordinate},null,8,["coordinates"]),r(w,null,{default:i((()=>[r(k,{radius:c.radius},{default:i((()=>[r(_,{color:c.fillColor},null,8,["color"]),r(y,{color:c.strokeColor,width:c.strokeWidth},null,8,["color","width"])])),_:1},8,["radius"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)};export{a as _};
