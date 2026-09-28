/* Wires store, diagram, journal and scenarios into the page. */
(function (F) {
  "use strict";
  const $ = (sel) => document.querySelector(sel);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const store = F.createStore(F.initialState);
  const diagram = F.createDiagram($("#map-mount"), F.topology);
  const journal = F.createJournal($("#journal"), 11 * 3600 + 31 * 60);
  const ticker = $("#ticker");
  let runningId = null;

  const say = (text, milestone) => journal.add(text, milestone);
  const banner = (text, tone) => { ticker.textContent = text; ticker.dataset.tone = tone || "idle"; };

  /* helpers handed to each scenario */
  const ctx = {
    s: store.get,
    say,
    pause: sleep,
    async trace(steps) {
      for (const [via, node, msg] of steps) {
        if (via) {
          diagram.setLink(via, "active");
          await diagram.travel(via, 420);
          diagram.setLink(via, "done");
        }
        diagram.setNode(node, "active");
        if (msg) say(msg);
        await sleep(260);
      }
    },
    settle({ done = [], paused = [], clearNodes = [], idleLinks = [] }) {
      done.forEach((id) => diagram.setNode(id, "done"));
      paused.forEach((id) => diagram.setNode(id, "paused"));
      clearNodes.forEach((id) => diagram.setNode(id, null));
      idleLinks.forEach((id) => diagram.setLink(id, null));
    },
    lock(patch, text, tone) { banner(text, tone); store.patch({ ...patch, busy: runningId }); },
    finish(patch, text, tone, milestone) {
      store.patch({ ...patch, busy: null });
      banner(text, tone);
      say(milestone, true);
    },
    reject(logText, bannerText) { say(logText); banner(bannerText || logText, "alert"); },
  };

  async function launch(scenario) {
    if (store.get().busy) return;
    runningId = scenario.id;
    try { await scenario.run(ctx); }
    finally { if (store.get().busy) store.patch({ busy: null, pending: null }); }
  }

  function resetAll() {
    if (store.get().busy) return;
    diagram.clearAll();
    store.patch({ ...F.initialState });
    banner("System idle", "idle");
    say("Simulation reset");
  }

  /* scenario deck */
  F.scenarios.forEach((sc, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scene";
    btn.dataset.tone = sc.tone;
    btn.dataset.id = sc.id;
    btn.innerHTML = '<span class="scene-icon" aria-hidden="true"></span><span class="scene-text"><strong></strong><small></small></span>';
    btn.querySelector(".scene-icon").textContent = sc.icon;
    btn.querySelector("strong").textContent = `${i + 1}. ${sc.title}`;
    btn.querySelector("small").textContent = sc.blurb;
    btn.addEventListener("click", () => launch(sc));
    li.append(btn);
    $("#deck-list").append(li);
  });

  /* render from state */
  const gaugeEls = document.querySelectorAll("[data-gauge]");
  const controls = document.querySelectorAll(".scene, #reset-btn");
  store.subscribe((s) => {
    const view = F.derive(s);
    gaugeEls.forEach((el) => {
      const [text, tone] = view[el.dataset.gauge];
      el.textContent = text;
      el.className = tone ? `t-${tone}` : "";
    });
    controls.forEach((b) => {
      b.disabled = !!s.busy;
      b.classList.toggle("is-running", b.dataset.id === s.busy);
    });
  });

  $("#reset-btn").addEventListener("click", resetAll);
  $("#clear-btn").addEventListener("click", journal.clear);
  F.app = { store, launch, resetAll };
})(window.Flux);
