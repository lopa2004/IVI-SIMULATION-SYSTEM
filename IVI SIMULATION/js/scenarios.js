/* Scenarios are declarative traces: [viaLink | null, nodeId, logMessage].
   run(c) receives a context built in app.js. */
(function (F) {
  "use strict";

  F.scenarios = [
    {
      id: "music", title: "Play music", icon: "▶", tone: "media",
      blurb: "Media Service → Audio HAL → speakers.",
      async run(c) {
        if (c.s().call !== "none") return c.reject("Music can't start during a call. End the call first.");
        c.lock({ pending: "Media (starting)" }, "Starting media playback…", "media");
        await c.trace([
          [null, "driver", "Driver interaction detected"],
          ["driver-hmi", "hmi", "HMI received media command"],
          ["hmi-controller", "controller", "Controller routed command to Media Service"],
          ["controller-media", "media", "Media Service generated audio stream"],
          ["media-audiohal", "audiohal", "Audio HAL processing PCM audio"],
          ["audiohal-speakers", "speakers", "Audio output sent to vehicle speakers"],
        ]);
        c.settle({ done: ["driver", "hmi", "controller", "media", "audiohal", "speakers"] });
        c.finish({ media: "playing", pending: null }, "Music playing", "media", "MUSIC PLAYING");
      },
    },
    {
      id: "nav", title: "Start navigation", icon: "➚", tone: "nav",
      blurb: "GPS and Map Database both feed Navigation.",
      async run(c) {
        c.lock({}, "Starting navigation…", "nav");
        await c.trace([
          [null, "driver", "Driver requested navigation"],
          ["driver-hmi", "hmi", "HMI forwarded navigation request"],
          ["hmi-controller", "controller", "Controller activated Navigation Service"],
          ["controller-nav", "nav", "Navigation Service processing request"],
          [null, "gps", "GPS Module acquired location fix"],
          ["gps-nav", "nav", "GPS data received by Navigation Service"],
          [null, "mapdb", "Map Database located relevant map tiles"],
          ["mapdb-nav", "nav", "Map data received by Navigation Service"],
        ]);
        c.say("Route calculated");
        c.settle({ done: ["driver", "hmi", "controller", "nav", "gps", "mapdb"] });
        c.finish({ nav: true }, "Navigation active", "nav", "Navigation status updated");
      },
    },
    {
      id: "project", title: "Project route", icon: "▤", tone: "proj",
      blurb: "Needs an active route. Navigation → Projection → HUD.",
      async run(c) {
        if (!c.s().nav) return c.reject("PROJECT ROUTE rejected — please start navigation first.", "No route available. Start navigation first.");
        c.lock({}, "Projecting route…", "proj");
        await c.trace([
          [null, "nav", "Navigation route available"],
          ["nav-proj", "proj", "Projection Service received route data"],
          ["proj-displayhal", "displayhal", "Display content prepared"],
          ["displayhal-hud", "hud", "Route projected to Central Display / HUD"],
        ]);
        c.settle({ done: ["nav", "proj", "displayhal", "hud"] });
        c.finish({ proj: true }, "Route projected", "proj", "ROUTE PROJECTED");
      },
    },
    {
      id: "call", title: "Incoming call", icon: "☎", tone: "alert",
      blurb: "Interrupts playing media.",
      async run(c) {
        if (c.s().call !== "none") return c.reject("A call is already in progress.");
        const wasPlaying = c.s().media === "playing";
        c.lock({ call: "incoming" }, "Incoming call…", "alert");
        await c.trace([
          [null, "phone", "Incoming call detected"],
          ["phone-hmi", "hmi", "Smartphone connection received"],
          ["hmi-controller", "controller", "IVI Controller received call event"],
          ["controller-media", "media", wasPlaying ? "Media Service interrupted — playback paused" : "Media Service notified of call event"],
        ]);
        c.settle({
          done: ["phone", "hmi", "controller", ...(wasPlaying ? [] : ["media"])],
          paused: wasPlaying ? ["media", "audiohal", "speakers"] : [],
          idleLinks: wasPlaying ? ["media-audiohal", "audiohal-speakers"] : [],
        });
        if (wasPlaying) c.say("Current media playback paused");
        c.say("Call interface activated");
        c.finish(
          { call: "active", media: wasPlaying ? "paused" : c.s().media },
          wasPlaying ? "Call active — music paused" : "Call active", "alert",
          wasPlaying ? "CALL ACTIVE — MUSIC PAUSED" : "CALL ACTIVE"
        );
      },
    },
    {
      id: "endcall", title: "End call", icon: "✕", tone: "alert",
      blurb: "Restores music only if the call paused it.",
      async run(c) {
        if (c.s().call === "none") return c.reject("No active call to end", "No call to end.");
        const resume = c.s().media === "paused";
        c.lock({}, "Ending call…", "alert");
        c.say("Call ended");
        await c.pause(250);
        c.settle({ clearNodes: ["phone"], idleLinks: ["phone-hmi"] });
        await c.trace([
          [null, "controller", "Call state cleared"],
          ["controller-media", "media", "Controller notified Media Service"],
          ...(resume ? [
            ["media-audiohal", "audiohal", "Previous media session restored"],
            ["audiohal-speakers", "speakers", "Music playback resumed"],
          ] : []),
        ]);
        c.settle({ done: ["controller", "media", ...(resume ? ["audiohal", "speakers"] : [])] });
        c.finish(
          { call: "none", media: resume ? "playing" : c.s().media },
          resume ? "Music resumed" : "Call ended", resume ? "media" : "nav",
          resume ? "MUSIC RESUMED" : "CALL ENDED"
        );
      },
    },
  ];
})((window.Flux = window.Flux || {}));
