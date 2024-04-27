import { inject, provide, cloneVNode, h, Fragment } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';

let t = Symbol("headlessui.useid"), i = 0;
function I() {
  return inject(t, () => `${++i}`)();
}
function l(e) {
  provide(t, e);
}
function o$1(e) {
  var l2;
  if (e == null || e.value == null)
    return null;
  let n = (l2 = e.value.$el) != null ? l2 : e.value;
  return n instanceof Node ? n : null;
}
function u(r, n, ...a) {
  if (r in n) {
    let e = n[r];
    return typeof e == "function" ? e(...a) : e;
  }
  let t2 = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(S || {});
function A({ visible: r = true, features: t2 = 0, ourProps: e, theirProps: o2, ...i2 }) {
  var a;
  let n = j(o2, e), l2 = Object.assign(i2, { props: n });
  if (r || t2 & 2 && n.static)
    return y(l2);
  if (t2 & 1) {
    let d = (a = n.unmount) == null || a ? 0 : 1;
    return u(d, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l2);
}
function y({ props: r, attrs: t2, slots: e, slot: o2, name: i2 }) {
  var m, h$1;
  let { as: n, ...l2 } = T(r, ["unmount", "static"]), a = (m = e.default) == null ? void 0 : m.call(e, o2), d = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p, f] of Object.entries(o2))
      typeof f == "boolean" && (u2 = true), f === true && c.push(p);
    u2 && (d["data-headlessui-state"] = c.join(" "));
  }
  if (n === "template") {
    if (a = b(a != null ? a : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c] = a != null ? a : [];
      if (!v(u2) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s) => s.trim()).filter((s, g, R) => R.indexOf(s) === g).sort((s, g) => s.localeCompare(g)).map((s) => `  - ${s}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s) => `  - ${s}`).join(`
`)].join(`
`));
      let p = j((h$1 = u2.props) != null ? h$1 : {}, l2, d), f = cloneVNode(u2, p, true);
      for (let s in p)
        s.startsWith("on") && (f.props || (f.props = {}), f.props[s] = p[s]);
      return f;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h(n, Object.assign({}, l2, d), { default: () => a });
}
function b(r) {
  return r.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t2 = {}, e = {};
  for (let i2 of r)
    for (let n in i2)
      n.startsWith("on") && typeof i2[n] == "function" ? (e[n] != null || (e[n] = []), e[n].push(i2[n])) : t2[n] = i2[n];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e).map((i2) => [i2, void 0])));
  for (let i2 in e)
    Object.assign(t2, { [i2](n, ...l2) {
      let a = e[i2];
      for (let d of a) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        d(n, ...l2);
      }
    } });
  return t2;
}
function E(r) {
  let t2 = Object.assign({}, r);
  for (let e in t2)
    t2[e] === void 0 && delete t2[e];
  return t2;
}
function T(r, t2 = []) {
  let e = Object.assign({}, r);
  for (let o2 of t2)
    o2 in e && delete e[o2];
  return e;
}
function v(r) {
  return r == null ? false : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
var o = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o || {});

export { A, E, I, N, S, T, o as a, l, o$1 as o, u };
//# sourceMappingURL=keyboard-StezvEZ1.mjs.map
