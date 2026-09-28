/* Tiny observable store + pure derivation of what the UI shows. */
(function (F) {
  "use strict";

  F.createStore = function (initial) {
    let state = { ...initial };
    const listeners = new Set();
    return {
      get: () => state,
      patch(changes) {
        state = { ...state, ...changes };
        listeners.forEach((fn) => fn(state));
      },
      subscribe(fn) { listeners.add(fn); fn(state); },
    };
  };

  F.initialState = {
    media: "stopped",   // stopped | playing | paused
    nav: false,
    proj: false,
    call: "none",       // none | incoming | active
    pending: null,      // transient mode label while a scenario runs
    busy: null,         // id of the running scenario
  };

  /* state -> [text, tone] pairs for the Live state board */
  F.derive = function (s) {
    let mode = "Idle";
    if (s.call === "active") mode = "Call";
    else if (s.media === "playing") mode = s.nav ? "Music + navigation" : "Music";
    else if (s.nav) mode = "Navigation";
    if (s.pending) mode = s.pending;

    return {
      mode: [mode, s.call === "active" ? "alert" : s.pending ? "busy" : ""],
      media: { stopped: ["Stopped", ""], playing: ["Playing", "ok"], paused: ["Paused", "busy"] }[s.media],
      nav: s.nav ? ["Active", "ok"] : ["Inactive", ""],
      proj: s.proj ? ["Active", "ok"] : ["Inactive", ""],
      call: { none: ["No call", "ok"], incoming: ["Incoming", "alert"], active: ["Active", "alert"] }[s.call],
    };
  };
})((window.Flux = window.Flux || {}));
