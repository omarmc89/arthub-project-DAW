import { watchEffect, ref, h, defineComponent, provide, inject, computed, onMounted, getCurrentInstance, watch, onUnmounted, Teleport, reactive } from "vue";
import { c, i } from "./focus-management-BvtO1QQs.js";
import { a as w } from "./use-outside-click-DPs8-blD.js";
import { f, s as s$1 } from "./hidden-BCOMh9xa.js";
import { o, A as A$1 } from "./keyboard-StezvEZ1.js";
function E(n2, e2, o2, r) {
  c.isServer || watchEffect((t) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t(() => n2.removeEventListener(e2, o2, r));
  });
}
var d = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d || {});
function n() {
  let o2 = ref(0);
  return w("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function N$1({ defaultContainers: o$1 = [], portals: i$1, mainTreeNodeRef: H } = {}) {
  let t = ref(null), r = i(t);
  function u2() {
    var l, f2, a;
    let n2 = [];
    for (let e2 of o$1)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i$1 != null && i$1.value)
      for (let e2 of i$1.value)
        n2.push(e2);
    for (let e2 of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o(t)) || e2.contains((a = (f2 = o(t)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a.host) || n2.some((M) => e2.contains(M)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l) => l.contains(n2));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return H != null ? null : h(f, { features: s$1.Hidden, ref: t });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h(f, { features: s$1.Hidden, ref: o2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s() {
  return inject(e, false);
}
let u = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function x(r) {
  let e2 = i(r);
  if (!e2) {
    if (r === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let t = e2.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t);
}
let _ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r, { slots: e2, attrs: u2 }) {
  let t = ref(null), i$1 = computed(() => i(t)), l = s(), n2 = inject(C, null), o$1 = ref(l === true || n2 == null ? x(t.value) : n2.resolveTarget()), d2 = ref(false);
  onMounted(() => {
    d2.value = true;
  }), watchEffect(() => {
    l || n2 != null && (o$1.value = n2.resolveTarget());
  });
  let c2 = inject(m, null), v2 = false, H = getCurrentInstance();
  return watch(t, () => {
    if (v2 || !c2)
      return;
    let a = o(t);
    a && (onUnmounted(c2.register(a), H), v2 = true);
  }), onUnmounted(() => {
    var g, P;
    let a = (g = i$1.value) == null ? void 0 : g.getElementById("headlessui-portal-root");
    a && o$1.value === a && o$1.value.children.length <= 0 && ((P = o$1.value.parentElement) == null || P.removeChild(o$1.value));
  }), () => {
    if (!d2.value || o$1.value === null)
      return null;
    let a = { ref: t, "data-headlessui-portal": "" };
    return h(Teleport, { to: o$1.value }, A$1({ ourProps: a, theirProps: r, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} }), m = Symbol("PortalParentContext");
function A() {
  let r = inject(m, null), e2 = ref([]);
  function u2(l) {
    return e2.value.push(l), r && r.register(l), () => t(l);
  }
  function t(l) {
    let n2 = e2.value.indexOf(l);
    n2 !== -1 && e2.value.splice(n2, 1), r && r.unregister(l);
  }
  let i2 = { register: u2, unregister: t, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l, { slots: n2 }) {
    return provide(m, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let C = Symbol("PortalGroupContext"), N = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r, { attrs: e2, slots: u2 }) {
  let t = reactive({ resolveTarget() {
    return r.target;
  } });
  return provide(C, t), () => {
    let { target: i2, ...l } = r;
    return A$1({ theirProps: l, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
export {
  A,
  E,
  N$1 as N,
  _,
  N as a,
  d,
  n,
  u,
  v
};
//# sourceMappingURL=portal-B5DpPacA.js.map
