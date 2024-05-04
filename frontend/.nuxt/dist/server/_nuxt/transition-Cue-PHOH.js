import { defineComponent, ref, computed, onMounted, onUnmounted, h, Fragment, watchEffect, watch, shallowRef, provide, inject, nextTick, normalizeClass } from "vue";
import { n, E as E$1, d as d$2, A as A$3, N as N$3, u as u$2, _, a as N$4 } from "./portal-B5DpPacA.js";
import { f, s as s$1 } from "./hidden-BCOMh9xa.js";
import { t as t$2, o as o$1 } from "./disposables-lSGnSUs6.js";
import { A as A$2, o, u as u$1, I, N as N$5, a as o$2, S as S$1, T as T$2 } from "./keyboard-StezvEZ1.js";
import { i as i$1, S, P, N as N$2, T as T$1, c as c$1 } from "./focus-management-BvtO1QQs.js";
import { t as t$1 } from "./micro-task-B6uncIso.js";
import { t as t$3, w as w$1 } from "./use-outside-click-DPs8-blD.js";
import { l as l$2, i as i$2, s as s$2, t as t$4 } from "./open-closed-BDzQJ33n.js";
import { k } from "./description-CT80-Yva.js";
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r of t2.value) {
    let l2 = o(r);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(A$1 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$1, slots: r, expose: l2 }) {
  let o$12 = ref(null);
  l2({ el: o$12, $el: o$12 });
  let i2 = computed(() => i$1(o$12)), e = ref(false);
  onMounted(() => e.value = true), onUnmounted(() => e.value = false), $({ ownerDocument: i2 }, computed(() => e.value && Boolean(t2.features & 16)));
  let m2 = z({ ownerDocument: i2, container: o$12, initialFocus: computed(() => t2.initialFocus) }, computed(() => e.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o$12, containers: t2.containers, previousActiveElement: m2 }, computed(() => e.value && Boolean(t2.features & 8)));
  let f$1 = n();
  function a2(u2) {
    let T2 = o(o$12);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$1(f$1.value, { [d$2.Forwards]: () => {
        P(T2, N$2.First, { skipElements: [u2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P(T2, N$2.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s2 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
      s2.value = false;
    }));
  }
  function H2(u2) {
    if (!e.value)
      return;
    let T2 = B(t2.containers);
    o(o$12) instanceof HTMLElement && T2.add(o(o$12));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$1(T2, d2) || (s2.value ? P(o(o$12), u$1(f$1.value, { [d$2.Forwards]: () => N$2.Next, [d$2.Backwards]: () => N$2.Previous }) | N$2.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o$12, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O } = t2;
    return h(Fragment, [Boolean(d2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$1.Focusable }), A$2({ ourProps: T2, theirProps: { ...n$1, ...O }, slot: u2, attrs: n$1, slots: r, name: "FocusTrap" }), Boolean(d2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$1.Focusable })]);
  };
} }), { features: A$1 });
function W$1(t2) {
  let n2 = ref(t$2.slice());
  return watch([t2], ([r], [l2]) => {
    l2 === true && r === false ? t$1(() => {
      n2.value.splice(0);
    }) : l2 === false && r === true && (n2.value = t$2.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r : null;
  };
}
function $({ ownerDocument: t2 }, n2) {
  let r = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S(r());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S(r());
  });
}
function z({ ownerDocument: t2, container: n2, initialFocus: r }, l2) {
  let o$12 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r, l2], (e, m2) => {
      if (e.every((a2, s2) => (m2 == null ? void 0 : m2[s2]) === a2) || !l2.value)
        return;
      let f2 = o(n2);
      f2 && t$1(() => {
        var F2, H2;
        if (!i2.value)
          return;
        let a2 = o(r), s2 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s2) {
            o$12.value = s2;
            return;
          }
        } else if (f2.contains(s2)) {
          o$12.value = s2;
          return;
        }
        a2 ? S(a2) : P(f2, N$2.First | N$2.NoScroll) === T$1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o$12.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o$12;
}
function J({ ownerDocument: t2, container: n2, containers: r, previousActiveElement: l2 }, o$12) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e) => {
    if (!o$12.value)
      return;
    let m2 = B(r);
    o(n2) instanceof HTMLElement && m2.add(o(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e.target;
    a2 && a2 instanceof HTMLElement ? N$1(m2, a2) ? (l2.value = a2, S(a2)) : (e.preventDefault(), e.stopPropagation(), S(f2)) : S(l2.value);
  }, true);
}
function N$1(t2, n2) {
  for (let r of t2)
    if (r.contains(n2))
      return true;
  return false;
}
function m$2(t2) {
  let e = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e.value = t2.getSnapshot();
  })), e;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e) {
    return n2.add(e), () => n2.delete(e);
  }, dispatch(e, ...s2) {
    let i2 = r[e].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e }) {
    var l2;
    let n2 = e.documentElement;
    o2 = ((l2 = e.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e, d: n2 }) {
    let t2 = e.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w() {
  return t$3() ? { before({ doc: r, d: n2, meta: c2 }) {
    function o2(a2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a2));
    }
    n2.microTask(() => {
      var s2;
      if ((void 0).getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let t2 = o$1();
        t2.style(r.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let a2 = (s2 = (void 0).scrollY) != null ? s2 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e = t2.target.closest("a");
            if (!e)
              return;
            let { hash: f2 } = new URL(e.href), i2 = r.querySelector(f2);
            i2 && !o2(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o2(t2.target)) {
            let e = t2.target;
            for (; e.parentElement && o2(e.parentElement); )
              e = e.parentElement;
            n2.style(e, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o2(t2.target)) {
            let e = t2.target;
            for (; e.parentElement && e.dataset.headlessuiPortal !== "" && !(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth); )
              e = e.parentElement;
            e.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
      }, { passive: false }), n2.add(() => {
        var e;
        let t2 = (e = (void 0).scrollY) != null ? e : (void 0).pageYOffset;
        a2 !== t2 && (void 0).scrollTo(0, a2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e, d: o2 }) {
    o2.style(e.documentElement, "overflow", "hidden");
  } };
}
function m$1(e) {
  let n2 = {};
  for (let t2 of e)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e, n2) {
  var o2;
  let t2 = (o2 = this.get(e)) != null ? o2 : { doc: e, count: 0, d: o$1(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e, t2), this;
}, POP(e, n2) {
  let t2 = this.get(e);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e, d: n2, meta: t2 }) {
  let o2 = { doc: e, d: n2, meta: m$1(t2) }, c$12 = [w(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
a.subscribe(() => {
  let e = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e = t2.value ? i2.value.get(t2.value) : void 0;
    return e ? e.count > 0 : false;
  });
  return watch([t2, a$12], ([e, m2], [r], o2) => {
    if (!e || !m2)
      return;
    a.dispatch("PUSH", e, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o$12) => {
    var a2;
    if (!f2.value)
      return;
    let e = o(d2);
    if (!e)
      return;
    o$12(function() {
      var u2;
      if (!e)
        return;
      let r = (u2 = t.get(e)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e) : t.set(e, r - 1), r !== 1)
        return;
      let n2 = i.get(e);
      n2 && (n2["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n2["aria-hidden"]), e.inert = n2.inert, i.delete(e));
    });
    let l2 = (a2 = t.get(e)) != null ? a2 : 0;
    t.set(e, l2 + 1), l2 === 0 && (i.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = true);
  });
}
let u = Symbol("StackContext");
var s = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(s || {});
function y() {
  return inject(u, () => {
  });
}
function R$1({ type: o2, enabled: r, element: e, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e) : d2 === true && t2(1, o2, e);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e);
  }), provide(u, t2);
}
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(e) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", We = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => true }, setup(e, { emit: i2, attrs: l2, slots: d2, expose: s$12 }) {
  var _$1, q;
  let n2 = (_$1 = e.id) != null ? _$1 : `headlessui-dialog-${I()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r = false, g2 = computed(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (r || (r = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => e.open === A && S2 !== null ? (S2.value & i$2.Open) === i$2.Open : e.open), m2 = ref(null), E$2 = computed(() => i$1(m2));
  if (s$12({ el: m2, $el: m2 }), !(e.open !== A || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A ? void 0 : e.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = A$3(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$3({ portals: Q2, defaultContainers: [computed(() => {
    var t2;
    return (t2 = h$1.panelRef.value) != null ? t2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U = computed(() => S2 !== null ? (S2.value & i$2.Closing) === i$2.Closing : false), te = computed(() => N2 || U.value ? false : k$1.value), le = computed(() => {
    var t2, a2, p;
    return (p = Array.from((a2 = (t2 = E$2.value) == null ? void 0 : t2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o(K)) && f2 instanceof HTMLElement)) != null ? p : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var t2, a2, p;
    return (p = Array.from((a2 = (t2 = E$2.value) == null ? void 0 : t2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o(K)) && f2 instanceof HTMLElement)) != null ? p : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (t2, a2) => {
    if (a2 === "Dialog")
      return u$1(t2, { [s.Add]: () => D.value += 1, [s.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M = ref(null), h$1 = { titleId: M, panelRef: ref(null), dialogState: c2, setTitleId(t2) {
    M.value !== t2 && (M.value = t2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h$1);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$1(B2, (t2, a2) => {
    h$1.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((q = E$2.value) == null ? void 0 : q.defaultView, "keydown", (t2) => {
    ie.value && (t2.defaultPrevented || t2.key === o$2.Escape && (t2.preventDefault(), t2.stopPropagation(), h$1.close()));
  });
  let ue$1 = computed(() => !(U.value || c2.value !== 0 || N2));
  return d$1(E$2, ue$1, (t2) => {
    var a2;
    return { containers: [...(a2 = t2.containers) != null ? a2 : [], B2] };
  }), watchEffect((t2) => {
    if (c2.value !== 0)
      return;
    let a2 = o(m2);
    if (!a2)
      return;
    let p = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x = L2.target.getBoundingClientRect();
        x.x === 0 && x.y === 0 && x.width === 0 && x.height === 0 && h$1.close();
      }
    });
    p.observe(a2), t2(() => p.disconnect());
  }), () => {
    let { open: t2, initialFocus: a2, ...p } = e, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h(u$2, { force: true }, () => [h(_, () => h(N$4, { target: m2.value }, () => h(u$2, { force: false }, () => h(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$1(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h(X, {}, () => A$2({ ourProps: f2, theirProps: { ...p, ...l2 }, slot: L2, attrs: l2, slots: d2, visible: c2.value === 0, features: N$5.RenderStrategy | N$5.Static, name: "Dialog" })))))), h(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: i2, slots: l2 }) {
  var u2;
  let d2 = (u2 = e.id) != null ? u2 : `headlessui-dialog-overlay-${I()}`, s2 = T("DialogOverlay");
  function n2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), s2.close());
  }
  return () => {
    let { ...r } = e;
    return A$2({ ourProps: { id: d2, "aria-hidden": true, onClick: n2 }, theirProps: r, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(e, { attrs: i2, slots: l2, expose: d2 }) {
  var r;
  let s2 = (r = e.id) != null ? r : `headlessui-dialog-backdrop-${I()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return d2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = e, D = { id: s2, ref: u2, "aria-hidden": true };
    return h(u$2, { force: true }, () => h(_, () => A$2({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: i2, slots: l2, expose: d2 }) {
  var r;
  let s2 = (r = e.id) != null ? r : `headlessui-dialog-panel-${I()}`, n2 = T("DialogPanel");
  d2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = e, D = { id: s2, ref: n2.panelRef, onClick: u2 };
    return A$2({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: i2, slots: l2 }) {
  var n2;
  let d2 = (n2 = e.id) != null ? n2 : `headlessui-dialog-title-${I()}`, s2 = T("DialogTitle");
  return onMounted(() => {
    s2.setTitleId(d2), onUnmounted(() => s2.setTitleId(null));
  }), () => {
    let { ...u2 } = e;
    return A$2({ ourProps: { id: d2 }, theirProps: u2, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r(...t2);
  };
}
function m(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function d(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e, t2) {
  let i2 = o$1();
  if (!e)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e), [l2, s2] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s2) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e, t2, i2, n2, a2, l$12) {
  let s2 = o$1(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e, ...a2), m(e, ...t2, ...i2), s2.nextFrame(() => {
    d(e, ...i2), m(e, ...n2), s2.add(F(e, (u2) => (d(e, ...n2, ...t2), m(e, ...a2), o2(u2))));
  }), s2.add(() => d(e, ...t2, ...i2, ...n2, ...a2)), s2.add(() => o2("cancelled")), s2.dispose;
}
function g(e = "") {
  return e.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e = inject(R, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ge() {
  let e = inject(N, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let N = Symbol("NestingContext");
function L(e) {
  return "children" in e ? L(e.children) : e.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s2(n2, r = S$1.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$1(r, { [S$1.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S$1.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e == null || e()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s2(n2, S$1.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$5.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a2, slots: s2, expose: h$1 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= i$2.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$2.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$2.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~i$2.Closing, t2("afterLeave");
  }
  if (!me() && s$2())
    return () => h(Se, { ...e, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s2);
  let d2 = ref(null), y2 = computed(() => e.unmount ? S$1.Unmount : S$1.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v.value ? "visible" : "hidden"), I$1 = { value: true }, c2 = I(), b = { value: false }, P2 = Q(() => {
    !b.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S$1.Hidden && c2) {
      if (v.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$1(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j = g(e.enter), M = g(e.enterFrom), X = g(e.enterTo), _2 = g(e.entered), Y = g(e.leave), Z = g(e.leaveFrom), ee = g(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o$12 = o(d2);
        if (o$12 instanceof Comment && o$12.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o$12) {
    let E2 = I$1.value && !A2.value, p = o(d2);
    !p || !(p instanceof HTMLElement) || E2 || (b.value = true, v.value && r(), v.value || f2(), o$12(v.value ? L$1(p, j, M, X, _2, (V) => {
      b.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _2, (V) => {
      b.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v], (o2, E2, p) => {
      te(p), I$1.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$4(computed(() => u$1(i2.value, { ["visible"]: i$2.Open, ["hidden"]: i$2.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U } = e, ne = { ref: d2 }, re = { ...U, ...A2.value && v.value && c$1.isServer ? { class: normalizeClass([a2.class, U.class, ...j, ...M]) } : {} };
    return A$2({ theirProps: re, ourProps: ne, slot: {}, slots: s2, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a2, slots: s2 }) {
  let h$1 = l$2(), n2 = computed(() => e.show === null && h$1 !== null ? (h$1.value & i$2.Open) === i$2.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$2(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e.unmount };
    return A$2({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
export {
  Ge as G,
  Se as S,
  We as W,
  he as h
};
//# sourceMappingURL=transition-Cue-PHOH.js.map
