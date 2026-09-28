/* Builds the signal map as SVG from the topology and exposes visual controls. */
(function (F) {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const { w: W, h: H } = F.NODE;
  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  const svgEl = (tag, attrs = {}, text) => {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    if (text != null) el.textContent = text;
    return el;
  };

  const anchor = (n, side) => ({
    l: [n.x, n.y + H / 2], r: [n.x + W, n.y + H / 2],
    t: [n.x + W / 2, n.y], b: [n.x + W / 2, n.y + H],
  }[side]);

  function geometry(link, nodes) {
    const [x1, y1] = anchor(nodes[link.from], link.a[0]);
    const [x2, y2] = anchor(nodes[link.to], link.a[1]);
    const vertical = link.a[0] === "b" || link.a[0] === "t";
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const d = vertical
      ? `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`
      : `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
    return { d, mx, my };
  }

  F.createDiagram = function (mount, topo) {
    const svg = svgEl("svg", { viewBox: "0 0 1200 580", role: "img", "aria-label": "IVI architecture signal map" });
    const layer = { zones: svgEl("g"), links: svgEl("g"), labels: svgEl("g", { class: "link-labels" }), nodes: svgEl("g") };
    const nodeEls = {}, linkEls = {};

    topo.zones.forEach((z) => {
      layer.zones.append(
        svgEl("rect", { class: `zone zone-${z.kind}`, x: z.x, y: z.y, width: z.w, height: z.h, rx: 6 }),
        svgEl("text", { class: "zone-label", x: z.x + 12, y: z.y + 20 }, z.label.toUpperCase())
      );
    });

    Object.entries(topo.links).forEach(([id, link]) => {
      const { d, mx, my } = geometry(link, topo.nodes);
      const path = svgEl("path", { class: "link" + (link.dash ? " is-dashed" : ""), d });
      linkEls[id] = path;
      layer.links.append(path);
      layer.labels.append(svgEl("text", { x: mx, y: my - 6, "text-anchor": "middle" }, link.label));
    });

    Object.entries(topo.nodes).forEach(([id, n]) => {
      const g = svgEl("g", { class: "node", "data-kind": n.k });
      g.append(
        svgEl("rect", { x: n.x, y: n.y, width: W, height: H, rx: 5 }),
        svgEl("text", { class: "node-title", x: n.x + W / 2, y: n.y + 24, "text-anchor": "middle" }, n.title),
        svgEl("text", { class: "node-sub", x: n.x + W / 2, y: n.y + 42, "text-anchor": "middle" }, n.sub)
      );
      nodeEls[id] = g;
      layer.nodes.append(g);
    });

    const dot = svgEl("circle", { class: "dot", r: 7, cx: -50, cy: -50 });
    svg.append(layer.zones, layer.links, layer.labels, dot, layer.nodes);
    mount.replaceChildren(svg);

    const mark = (el, state) => el && (state ? el.setAttribute("data-state", state) : el.removeAttribute("data-state"));

    return {
      setNode: (id, state) => mark(nodeEls[id], state),
      setLink: (id, state) => mark(linkEls[id], state),
      clearAll() {
        [...Object.values(nodeEls), ...Object.values(linkEls)].forEach((el) => mark(el, null));
        dot.classList.remove("is-on");
      },
      /* Move the data packet along a link; resolves on arrival. */
      travel(id, ms) {
        const path = linkEls[id];
        if (!path || reduceMotion) return new Promise((r) => setTimeout(r, reduceMotion ? 80 : 0));
        const len = path.getTotalLength();
        dot.classList.add("is-on");
        return new Promise((resolve) => {
          const t0 = performance.now();
          const frame = (now) => {
            const t = Math.min(1, (now - t0) / ms);
            const p = path.getPointAtLength(t * len);
            dot.setAttribute("cx", p.x);
            dot.setAttribute("cy", p.y);
            if (t < 1) requestAnimationFrame(frame);
            else { dot.classList.remove("is-on"); resolve(); }
          };
          requestAnimationFrame(frame);
        });
      },
    };
  };
})((window.Flux = window.Flux || {}));
