/* Static description of the architecture. The diagram is generated from this. */
(function (F) {
  "use strict";
  F.NODE = { w: 130, h: 56 };

  F.topology = {
    zones: [
      { label: "External", kind: "ext", x: 6, y: 50, w: 178, h: 350 },
      { label: "IVI system", kind: "ivi", x: 196, y: 14, w: 994, h: 396 },
      { label: "Vehicle system", kind: "veh", x: 406, y: 430, w: 390, h: 130 },
    ],
    // k = category (colour). x/y = top-left corner.
    nodes: {
      driver:     { title: "Driver",            sub: "User input",             k: "ext",   x: 20,   y: 80 },
      phone:      { title: "Smartphone",        sub: "Android Auto / CarPlay", k: "ext",   x: 20,   y: 300 },
      hmi:        { title: "IVI HMI",           sub: "Touch display / UI",     k: "hub",   x: 215,  y: 190 },
      controller: { title: "IVI Controller",    sub: "Middleware / routing",   k: "hub",   x: 425,  y: 190 },
      media:      { title: "Media Service",     sub: "Playback",               k: "media", x: 640,  y: 50 },
      nav:        { title: "Navigation Service", sub: "Maps / routing",        k: "nav",   x: 640,  y: 190 },
      proj:       { title: "Projection Service", sub: "Screen / HUD",          k: "proj",  x: 640,  y: 330 },
      audiohal:   { title: "Audio HAL",         sub: "Hardware abstraction",   k: "media", x: 845,  y: 50 },
      gps:        { title: "GPS Module",        sub: "GNSS receiver",          k: "nav",   x: 845,  y: 150 },
      mapdb:      { title: "Map Database",      sub: "Stored map data",        k: "nav",   x: 845,  y: 230 },
      displayhal: { title: "Display HAL",       sub: "Display interface",      k: "proj",  x: 845,  y: 330 },
      speakers:   { title: "Vehicle Speakers",  sub: "Audio output",           k: "media", x: 1050, y: 50 },
      hud:        { title: "Display / HUD",     sub: "Visual output",          k: "proj",  x: 1050, y: 330 },
      vehnet:     { title: "Vehicle Network",   sub: "CAN / LIN",              k: "veh",   x: 425,  y: 466 },
      ecus:       { title: "Vehicle ECUs",      sub: "Speed / gear",           k: "veh",   x: 640,  y: 466 },
    },
    // a = [side on source, side on target] (l/r/t/b). dash = bus / optional link.
    links: {
      "driver-hmi":        { from: "driver", to: "hmi", a: ["r", "l"], label: "Touch/voice" },
      "phone-hmi":         { from: "phone", to: "hmi", a: ["r", "l"], label: "Media/proj.", dash: true },
      "hmi-controller":    { from: "hmi", to: "controller", a: ["r", "l"], label: "Commands" },
      "controller-media":  { from: "controller", to: "media", a: ["r", "l"], label: "Media cmd" },
      "controller-nav":    { from: "controller", to: "nav", a: ["r", "l"], label: "Nav req." },
      "controller-proj":   { from: "controller", to: "proj", a: ["r", "l"], label: "Proj. cmd" },
      "controller-vehnet": { from: "controller", to: "vehnet", a: ["b", "t"], label: "Vehicle data (CAN)", dash: true },
      "vehnet-ecus":       { from: "vehnet", to: "ecus", a: ["r", "l"], label: "CAN/LIN", dash: true },
      "nav-proj":          { from: "nav", to: "proj", a: ["b", "t"], label: "Route data" },
      "media-audiohal":    { from: "media", to: "audiohal", a: ["r", "l"], label: "PCM audio" },
      "audiohal-speakers": { from: "audiohal", to: "speakers", a: ["r", "l"], label: "Audio out" },
      "gps-nav":           { from: "gps", to: "nav", a: ["l", "r"], label: "GPS" },
      "mapdb-nav":         { from: "mapdb", to: "nav", a: ["l", "r"], label: "Map data" },
      "proj-displayhal":   { from: "proj", to: "displayhal", a: ["r", "l"], label: "Content" },
      "displayhal-hud":    { from: "displayhal", to: "hud", a: ["r", "l"], label: "Video out" },
    },
  };
})((window.Flux = window.Flux || {}));
