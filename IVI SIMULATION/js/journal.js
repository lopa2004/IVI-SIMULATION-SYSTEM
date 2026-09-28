/* Timestamped event journal on a simulated clock. */
(function (F) {
  "use strict";
  F.createJournal = function (listEl, startSeconds) {
    let clock = startSeconds;
    const p2 = (n) => String(n).padStart(2, "0");
    const stamp = () => `${p2(Math.floor(clock / 3600) % 24)}:${p2(Math.floor(clock / 60) % 60)}:${p2(clock % 60)}`;

    const showEmpty = () => {
      const li = document.createElement("li");
      li.className = "journal-empty";
      li.textContent = "Nothing yet. Run a scenario and events will appear here.";
      listEl.replaceChildren(li);
    };
    showEmpty();

    return {
      add(text, milestone = false) {
        listEl.querySelector(".journal-empty")?.remove();
        clock += 1 + Math.round(Math.random());
        const li = document.createElement("li");
        if (milestone) li.className = "is-milestone";
        const time = document.createElement("time");
        time.textContent = stamp();
        const span = document.createElement("span");
        span.textContent = text;
        li.append(time, span);
        listEl.append(li);
        listEl.scrollTop = listEl.scrollHeight;
      },
      clear: showEmpty,
    };
  };
})((window.Flux = window.Flux || {}));
