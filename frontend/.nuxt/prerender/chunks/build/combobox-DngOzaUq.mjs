import { useVirtualizer } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@tanstack/vue-virtual/dist/esm/index.js';
import { defineComponent, computed, ref, watch, provide, h, cloneVNode, reactive, toRaw, onMounted, Fragment, watchEffect, inject, onUnmounted, nextTick } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { d, e } from './form-Bxt8P_zR.mjs';
import { o as o$1, u, E, A, T, I, N as N$1, a as o } from './keyboard-StezvEZ1.mjs';
import { w, n } from './use-outside-click-DPs8-blD.mjs';
import { s as s$1 } from './use-resolve-button-type-BiIC-zUM.mjs';
import { c, f, i as i$2, u as u$1 } from './calculate-active-index-D7B59bcw.mjs';
import { f as f$1, s } from './hidden-BCOMh9xa.mjs';
import { t, i, l } from './open-closed-BDzQJ33n.mjs';
import { o as o$2, t as t$1 } from './disposables-lSGnSUs6.mjs';
import { i as i$1, O } from './focus-management-BvtO1QQs.mjs';

function Pe(a, T2) {
  return a === T2;
}
var we = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(we || {}), Ee = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(Ee || {}), Ve = ((R) => (R[R.Pointer = 0] = "Pointer", R[R.Focus = 1] = "Focus", R[R.Other = 2] = "Other", R))(Ve || {});
let ne = Symbol("ComboboxContext");
function N(a) {
  let T2 = inject(ne, null);
  if (T2 === null) {
    let r = new Error(`<${a} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, N), r;
  }
  return T2;
}
let ie = Symbol("VirtualContext"), ke = defineComponent({ name: "VirtualProvider", setup(a, { slots: T2 }) {
  let r = N("VirtualProvider"), R = computed(() => {
    let v = o$1(r.optionsRef);
    if (!v)
      return { start: 0, end: 0 };
    let s2 = (void 0).getComputedStyle(v);
    return { start: parseFloat(s2.paddingBlockStart || s2.paddingTop), end: parseFloat(s2.paddingBlockEnd || s2.paddingBottom) };
  }), o$12 = useVirtualizer(computed(() => ({ scrollPaddingStart: R.value.start, scrollPaddingEnd: R.value.end, count: r.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$1(r.optionsRef);
  }, overscan: 12 }))), u2 = computed(() => {
    var v;
    return (v = r.virtual.value) == null ? void 0 : v.options;
  }), e2 = ref(0);
  return watch([u2], () => {
    e2.value += 1;
  }), provide(ie, r.virtual.value ? o$12 : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${o$12.value.getTotalSize()}px` }, ref: (v) => {
    if (v) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r.activationTrigger.value === 0)
        return;
      r.activeOptionIndex.value !== null && r.virtual.value.options.length > r.activeOptionIndex.value && o$12.value.scrollToIndex(r.activeOptionIndex.value);
    }
  } }, o$12.value.getVirtualItems().map((v) => cloneVNode(T2.default({ option: r.virtual.value.options[v.index], open: r.comboboxState.value === 0 })[0], { key: `${e2.value}-${v.index}`, "data-index": v.index, "aria-setsize": r.virtual.value.options.length, "aria-posinset": v.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${v.start}px)`, overflowAnchor: "none" } })))];
} }), Ze = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a, { slots: T$1, attrs: r, emit: R }) {
  let o$12 = ref(1), u$12 = ref(null), e$1 = ref(null), v = ref(null), s$12 = ref(null), h$1 = ref({ static: false, hold: false }), b = ref([]), d$1 = ref(null), V = ref(2), P = ref(false);
  function D(l2 = (i2) => i2) {
    let i2 = d$1.value !== null ? b.value[d$1.value] : null, f2 = l2(b.value.slice()), p = f2.length > 0 && f2[0].dataRef.order.value !== null ? f2.sort((C, F) => C.dataRef.order.value - F.dataRef.order.value) : O(f2, (C) => o$1(C.dataRef.domRef)), O$1 = i2 ? p.indexOf(i2) : null;
    return O$1 === -1 && (O$1 = null), { options: p, activeOptionIndex: O$1 };
  }
  let L = computed(() => a.multiple ? 1 : 0), K = computed(() => a.nullable), [c$1, g] = d(computed(() => a.modelValue), (l2) => R("update:modelValue", l2), computed(() => a.defaultValue)), k = computed(() => c$1.value === void 0 ? u(L.value, { [1]: [], [0]: void 0 }) : c$1.value), n2 = null, y = null;
  function S(l2) {
    return u(L.value, { [0]() {
      return g == null ? void 0 : g(l2);
    }, [1]: () => {
      let i2 = toRaw(t$12.value.value).slice(), f2 = toRaw(l2), p = i2.findIndex((O2) => t$12.compare(f2, toRaw(O2)));
      return p === -1 ? i2.push(f2) : i2.splice(p, 1), g == null ? void 0 : g(i2);
    } });
  }
  let w$1 = computed(() => {
  });
  watch([w$1], ([l2], [i2]) => {
    if (t$12.virtual.value && l2 && i2 && d$1.value !== null) {
      let f2 = l2.indexOf(i2[d$1.value]);
      f2 !== -1 ? d$1.value = f2 : d$1.value = null;
    }
  });
  let t$12 = { comboboxState: o$12, value: k, mode: L, compare(l2, i2) {
    if (typeof a.by == "string") {
      let f2 = a.by;
      return (l2 == null ? void 0 : l2[f2]) === (i2 == null ? void 0 : i2[f2]);
    }
    return a.by === null ? Pe(l2, i2) : a.by(l2, i2);
  }, calculateIndex(l2) {
    return t$12.virtual.value ? a.by === null ? t$12.virtual.value.options.indexOf(l2) : t$12.virtual.value.options.findIndex((i2) => t$12.compare(i2, l2)) : b.value.findIndex((i2) => t$12.compare(i2.dataRef.value, l2));
  }, defaultValue: computed(() => a.defaultValue), nullable: K, immediate: computed(() => false), virtual: computed(() => null), inputRef: e$1, labelRef: u$12, buttonRef: v, optionsRef: s$12, disabled: computed(() => a.disabled), options: b, change(l2) {
    g(l2);
  }, activeOptionIndex: computed(() => {
    if (P.value && d$1.value === null && (t$12.virtual.value ? t$12.virtual.value.options.length > 0 : b.value.length > 0)) {
      if (t$12.virtual.value) {
        let i2 = t$12.virtual.value.options.findIndex((f2) => {
          var p;
          return !((p = t$12.virtual.value) != null && p.disabled(f2));
        });
        if (i2 !== -1)
          return i2;
      }
      let l2 = b.value.findIndex((i2) => !i2.dataRef.disabled);
      if (l2 !== -1)
        return l2;
    }
    return d$1.value;
  }), activationTrigger: V, optionsPropsRef: h$1, closeCombobox() {
    P.value = false, !a.disabled && o$12.value !== 1 && (o$12.value = 1, d$1.value = null);
  }, openCombobox() {
    if (P.value = true, !a.disabled && o$12.value !== 0) {
      if (t$12.value.value) {
        let l2 = t$12.calculateIndex(t$12.value.value);
        l2 !== -1 && (d$1.value = l2);
      }
      o$12.value = 0;
    }
  }, setActivationTrigger(l2) {
    V.value = l2;
  }, goToOption(l2, i2, f$12) {
    P.value = false, n2 !== null && cancelAnimationFrame(n2), n2 = requestAnimationFrame(() => {
      if (a.disabled || s$12.value && !h$1.value.static && o$12.value === 1)
        return;
      if (t$12.virtual.value) {
        d$1.value = l2 === c.Specific ? i2 : f({ focus: l2 }, { resolveItems: () => t$12.virtual.value.options, resolveActiveIndex: () => {
          var C, F;
          return (F = (C = t$12.activeOptionIndex.value) != null ? C : t$12.virtual.value.options.findIndex((W) => {
            var U;
            return !((U = t$12.virtual.value) != null && U.disabled(W));
          })) != null ? F : null;
        }, resolveDisabled: (C) => t$12.virtual.value.disabled(C), resolveId() {
          throw new Error("Function not implemented.");
        } }), V.value = f$12 != null ? f$12 : 2;
        return;
      }
      let p = D();
      if (p.activeOptionIndex === null) {
        let C = p.options.findIndex((F) => !F.dataRef.disabled);
        C !== -1 && (p.activeOptionIndex = C);
      }
      let O2 = l2 === c.Specific ? i2 : f({ focus: l2 }, { resolveItems: () => p.options, resolveActiveIndex: () => p.activeOptionIndex, resolveId: (C) => C.id, resolveDisabled: (C) => C.dataRef.disabled });
      d$1.value = O2, V.value = f$12 != null ? f$12 : 2, b.value = p.options;
    });
  }, selectOption(l2) {
    let i2 = b.value.find((p) => p.id === l2);
    if (!i2)
      return;
    let { dataRef: f2 } = i2;
    S(f2.value);
  }, selectActiveOption() {
    if (t$12.activeOptionIndex.value !== null) {
      if (t$12.virtual.value)
        S(t$12.virtual.value.options[t$12.activeOptionIndex.value]);
      else {
        let { dataRef: l2 } = b.value[t$12.activeOptionIndex.value];
        S(l2.value);
      }
      t$12.goToOption(c.Specific, t$12.activeOptionIndex.value);
    }
  }, registerOption(l2, i2) {
    let f2 = reactive({ id: l2, dataRef: i2 });
    if (t$12.virtual.value) {
      b.value.push(f2);
      return;
    }
    y && cancelAnimationFrame(y);
    let p = D((O2) => (O2.push(f2), O2));
    d$1.value === null && t$12.isSelected(i2.value.value) && (p.activeOptionIndex = p.options.indexOf(f2)), b.value = p.options, d$1.value = p.activeOptionIndex, V.value = 2, p.options.some((O2) => !o$1(O2.dataRef.domRef)) && (y = requestAnimationFrame(() => {
      let O2 = D();
      b.value = O2.options, d$1.value = O2.activeOptionIndex;
    }));
  }, unregisterOption(l2, i2) {
    if (n2 !== null && cancelAnimationFrame(n2), i2 && (P.value = true), t$12.virtual.value) {
      b.value = b.value.filter((p) => p.id !== l2);
      return;
    }
    let f2 = D((p) => {
      let O2 = p.findIndex((C) => C.id === l2);
      return O2 !== -1 && p.splice(O2, 1), p;
    });
    b.value = f2.options, d$1.value = f2.activeOptionIndex, V.value = 2;
  }, isSelected(l2) {
    return u(L.value, { [0]: () => t$12.compare(toRaw(t$12.value.value), toRaw(l2)), [1]: () => toRaw(t$12.value.value).some((i2) => t$12.compare(toRaw(i2), toRaw(l2))) });
  }, isActive(l2) {
    return d$1.value === t$12.calculateIndex(l2);
  } };
  w([e$1, v, s$12], () => t$12.closeCombobox(), computed(() => o$12.value === 0)), provide(ne, t$12), t(computed(() => u(o$12.value, { [0]: i.Open, [1]: i.Closed })));
  let I2 = computed(() => {
    var l2;
    return (l2 = o$1(e$1)) == null ? void 0 : l2.closest("form");
  });
  return onMounted(() => {
    watch([I2], () => {
      if (!I2.value || a.defaultValue === void 0)
        return;
      function l2() {
        t$12.change(a.defaultValue);
      }
      return I2.value.addEventListener("reset", l2), () => {
        var i2;
        (i2 = I2.value) == null || i2.removeEventListener("reset", l2);
      };
    }, { immediate: true });
  }), () => {
    var C, F, W;
    let { name: l2, disabled: i2, form: f2, ...p } = a, O2 = { open: o$12.value === 0, disabled: i2, activeIndex: t$12.activeOptionIndex.value, activeOption: t$12.activeOptionIndex.value === null ? null : t$12.virtual.value ? t$12.virtual.value.options[(C = t$12.activeOptionIndex.value) != null ? C : 0] : (W = (F = t$12.options.value[t$12.activeOptionIndex.value]) == null ? void 0 : F.dataRef.value) != null ? W : null, value: k.value };
    return h(Fragment, [...l2 != null && k.value != null ? e({ [l2]: k.value }).map(([U, ue]) => h(f$1, E({ features: s.Hidden, key: U, as: "input", type: "hidden", hidden: true, readOnly: true, form: f2, name: U, value: ue }))) : [], A({ theirProps: { ...r, ...T(p, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O2, slots: T$1, attrs: r, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a, { attrs: T2, slots: r }) {
  var e2;
  let R = (e2 = a.id) != null ? e2 : `headlessui-combobox-label-${I()}`, o$12 = N("ComboboxLabel");
  function u2() {
    var v;
    (v = o$1(o$12.inputRef)) == null || v.focus({ preventScroll: true });
  }
  return () => {
    let v = { open: o$12.comboboxState.value === 0, disabled: o$12.disabled.value }, { ...s2 } = a, h2 = { id: R, ref: o$12.labelRef, onClick: u2 };
    return A({ ourProps: h2, theirProps: s2, slot: v, attrs: T2, slots: r, name: "ComboboxLabel" });
  };
} });
let tt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a, { attrs: T2, slots: r, expose: R }) {
  var h2;
  let o$22 = (h2 = a.id) != null ? h2 : `headlessui-combobox-button-${I()}`, u2 = N("ComboboxButton");
  R({ el: u2.buttonRef, $el: u2.buttonRef });
  function e2(b) {
    u2.disabled.value || (u2.comboboxState.value === 0 ? u2.closeCombobox() : (b.preventDefault(), u2.openCombobox()), nextTick(() => {
      var d2;
      return (d2 = o$1(u2.inputRef)) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }
  function v(b) {
    switch (b.key) {
      case o.ArrowDown:
        b.preventDefault(), b.stopPropagation(), u2.comboboxState.value === 1 && u2.openCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o.ArrowUp:
        b.preventDefault(), b.stopPropagation(), u2.comboboxState.value === 1 && (u2.openCombobox(), nextTick(() => {
          u2.value.value || u2.goToOption(c.Last);
        })), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o.Escape:
        if (u2.comboboxState.value !== 0)
          return;
        b.preventDefault(), u2.optionsRef.value && !u2.optionsPropsRef.value.static && b.stopPropagation(), u2.closeCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let s2 = s$1(computed(() => ({ as: a.as, type: T2.type })), u2.buttonRef);
  return () => {
    var P, D;
    let b = { open: u2.comboboxState.value === 0, disabled: u2.disabled.value, value: u2.value.value }, { ...d2 } = a, V = { ref: u2.buttonRef, id: o$22, type: s2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (P = o$1(u2.optionsRef)) == null ? void 0 : P.id, "aria-expanded": u2.comboboxState.value === 0, "aria-labelledby": u2.labelRef.value ? [(D = o$1(u2.labelRef)) == null ? void 0 : D.id, o$22].join(" ") : void 0, disabled: u2.disabled.value === true ? true : void 0, onKeydown: v, onClick: e2 };
    return A({ ourProps: V, theirProps: d2, slot: b, attrs: T2, slots: r, name: "ComboboxButton" });
  };
} }), ot = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (a) => true }, setup(a, { emit: T2, attrs: r, slots: R, expose: o$3 }) {
  var k;
  let u$12 = (k = a.id) != null ? k : `headlessui-combobox-input-${I()}`, e2 = N("ComboboxInput"), v = computed(() => i$1(o$1(e2.inputRef))), s2 = { value: false };
  o$3({ el: e2.inputRef, $el: e2.inputRef });
  function h2() {
    e2.change(null);
    let n2 = o$1(e2.optionsRef);
    n2 && (n2.scrollTop = 0), e2.goToOption(c.Nothing);
  }
  let b = computed(() => {
    var y;
    let n2 = e2.value.value;
    return o$1(e2.inputRef) ? typeof a.displayValue != "undefined" && n2 !== void 0 ? (y = a.displayValue(n2)) != null ? y : "" : typeof n2 == "string" ? n2 : "" : "";
  });
  onMounted(() => {
    watch([b, e2.comboboxState, v], ([n2, y], [S, w2]) => {
      if (s2.value)
        return;
      let t2 = o$1(e2.inputRef);
      t2 && ((w2 === 0 && y === 1 || n2 !== S) && (t2.value = n2), requestAnimationFrame(() => {
        var i2;
        if (s2.value || !t2 || ((i2 = v.value) == null ? void 0 : i2.activeElement) !== t2)
          return;
        let { selectionStart: I2, selectionEnd: l2 } = t2;
        Math.abs((l2 != null ? l2 : 0) - (I2 != null ? I2 : 0)) === 0 && I2 === 0 && t2.setSelectionRange(t2.value.length, t2.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([n2], [y]) => {
      if (n2 === 0 && y === 1) {
        if (s2.value)
          return;
        let S = o$1(e2.inputRef);
        if (!S)
          return;
        let w2 = S.value, { selectionStart: t2, selectionEnd: I2, selectionDirection: l2 } = S;
        S.value = "", S.value = w2, l2 !== null ? S.setSelectionRange(t2, I2, l2) : S.setSelectionRange(t2, I2);
      }
    });
  });
  let d2 = ref(false);
  function V() {
    d2.value = true;
  }
  function P() {
    o$2().nextFrame(() => {
      d2.value = false;
    });
  }
  function D(n2) {
    switch (s2.value = true, n2.key) {
      case o.Enter:
        if (s2.value = false, e2.comboboxState.value !== 0 || d2.value)
          return;
        if (n2.preventDefault(), n2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o.ArrowDown:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), u(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Next), [1]: () => e2.openCombobox() });
      case o.ArrowUp:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), u(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c.Last);
          });
        } });
      case o.Home:
        if (n2.shiftKey)
          break;
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.First);
      case o.PageUp:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.First);
      case o.End:
        if (n2.shiftKey)
          break;
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.Last);
      case o.PageDown:
        return s2.value = false, n2.preventDefault(), n2.stopPropagation(), e2.goToOption(c.Last);
      case o.Escape:
        if (s2.value = false, e2.comboboxState.value !== 0)
          return;
        n2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && n2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && h2(), e2.closeCombobox();
        break;
      case o.Tab:
        if (s2.value = false, e2.comboboxState.value !== 0)
          return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function L(n2) {
    T2("change", n2), e2.nullable.value && e2.mode.value === 0 && n2.target.value === "" && h2(), e2.openCombobox();
  }
  function K(n2) {
    var S, w2, t2;
    let y = (S = n2.relatedTarget) != null ? S : t$1.find((I2) => I2 !== n2.currentTarget);
    if (s2.value = false, !((w2 = o$1(e2.optionsRef)) != null && w2.contains(y)) && !((t2 = o$1(e2.buttonRef)) != null && t2.contains(y)) && e2.comboboxState.value === 0)
      return n2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? h2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function c$1(n2) {
    var S, w2, t2;
    let y = (S = n2.relatedTarget) != null ? S : t$1.find((I2) => I2 !== n2.currentTarget);
    (w2 = o$1(e2.buttonRef)) != null && w2.contains(y) || (t2 = o$1(e2.optionsRef)) != null && t2.contains(y) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$2().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let g = computed(() => {
    var n2, y, S, w2;
    return (w2 = (S = (y = a.defaultValue) != null ? y : e2.defaultValue.value !== void 0 ? (n2 = a.displayValue) == null ? void 0 : n2.call(a, e2.defaultValue.value) : null) != null ? S : e2.defaultValue.value) != null ? w2 : "";
  });
  return () => {
    var I2, l2, i2, f2, p, O2, C;
    let n2 = { open: e2.comboboxState.value === 0 }, { displayValue: y, onChange: S, ...w2 } = a, t2 = { "aria-controls": (I2 = e2.optionsRef.value) == null ? void 0 : I2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (l2 = e2.options.value.find((F) => !e2.virtual.value.disabled(F.dataRef.value) && e2.compare(F.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : l2.id : (i2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : i2.id, "aria-labelledby": (O2 = (f2 = o$1(e2.labelRef)) == null ? void 0 : f2.id) != null ? O2 : (p = o$1(e2.buttonRef)) == null ? void 0 : p.id, "aria-autocomplete": "list", id: u$12, onCompositionstart: V, onCompositionend: P, onKeydown: D, onInput: L, onFocus: c$1, onBlur: K, role: "combobox", type: (C = r.type) != null ? C : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: g.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A({ ourProps: t2, theirProps: w2, slot: n2, attrs: r, slots: R, features: N$1.RenderStrategy | N$1.Static, name: "ComboboxInput" });
  };
} }), lt = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a, { attrs: T$1, slots: r, expose: R }) {
  let o$12 = N("ComboboxOptions"), u2 = `headlessui-combobox-options-${I()}`;
  R({ el: o$12.optionsRef, $el: o$12.optionsRef }), watchEffect(() => {
    o$12.optionsPropsRef.value.static = a.static;
  }), watchEffect(() => {
    o$12.optionsPropsRef.value.hold = a.hold;
  });
  let e2 = l(), v = computed(() => e2 !== null ? (e2.value & i.Open) === i.Open : o$12.comboboxState.value === 0);
  return i$2({ container: computed(() => o$1(o$12.optionsRef)), enabled: computed(() => o$12.comboboxState.value === 0), accept(s2) {
    return s2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s2) {
    s2.setAttribute("role", "none");
  } }), () => {
    var d2, V, P;
    let s2 = { open: o$12.comboboxState.value === 0 }, h$1 = { "aria-labelledby": (P = (d2 = o$1(o$12.labelRef)) == null ? void 0 : d2.id) != null ? P : (V = o$1(o$12.buttonRef)) == null ? void 0 : V.id, id: u2, ref: o$12.optionsRef, role: "listbox", "aria-multiselectable": o$12.mode.value === 1 ? true : void 0 }, b = T(a, ["hold"]);
    return A({ ourProps: h$1, theirProps: b, slot: s2, attrs: T$1, slots: o$12.virtual.value && o$12.comboboxState.value === 0 ? { ...r, default: () => [h(ke, {}, r.default)] } : r, features: N$1.RenderStrategy | N$1.Static, visible: v.value, name: "ComboboxOptions" });
  };
} }), at = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a, { slots: T$1, attrs: r, expose: R }) {
  let o$12 = N("ComboboxOption"), u2 = `headlessui-combobox-option-${I()}`, e2 = ref(null);
  R({ el: e2, $el: e2 });
  let v = computed(() => {
    var c2;
    return o$12.virtual.value ? o$12.activeOptionIndex.value === o$12.calculateIndex(a.value) : o$12.activeOptionIndex.value === null ? false : ((c2 = o$12.options.value[o$12.activeOptionIndex.value]) == null ? void 0 : c2.id) === u2;
  }), s2 = computed(() => o$12.isSelected(a.value)), h2 = inject(ie, null), b = computed(() => ({ disabled: a.disabled, value: a.value, domRef: e2, order: computed(() => a.order) }));
  onMounted(() => o$12.registerOption(u2, b)), onUnmounted(() => o$12.unregisterOption(u2, v.value)), watchEffect(() => {
    let c2 = o$1(e2);
    c2 && (h2 == null || h2.value.measureElement(c2));
  }), watchEffect(() => {
    o$12.comboboxState.value === 0 && v.value && (o$12.virtual.value || o$12.activationTrigger.value !== 0 && nextTick(() => {
      var c2, g;
      return (g = (c2 = o$1(e2)) == null ? void 0 : c2.scrollIntoView) == null ? void 0 : g.call(c2, { block: "nearest" });
    }));
  });
  function d2(c2) {
    var g;
    if (a.disabled || (g = o$12.virtual.value) != null && g.disabled(a.value))
      return c2.preventDefault();
    o$12.selectOption(u2), n() || requestAnimationFrame(() => {
      var k;
      return (k = o$1(o$12.inputRef)) == null ? void 0 : k.focus({ preventScroll: true });
    }), o$12.mode.value === 0 && requestAnimationFrame(() => o$12.closeCombobox());
  }
  function V() {
    var g;
    if (a.disabled || (g = o$12.virtual.value) != null && g.disabled(a.value))
      return o$12.goToOption(c.Nothing);
    let c$1 = o$12.calculateIndex(a.value);
    o$12.goToOption(c.Specific, c$1);
  }
  let P = u$1();
  function D(c2) {
    P.update(c2);
  }
  function L(c$1) {
    var k;
    if (!P.wasMoved(c$1) || a.disabled || (k = o$12.virtual.value) != null && k.disabled(a.value) || v.value)
      return;
    let g = o$12.calculateIndex(a.value);
    o$12.goToOption(c.Specific, g, 0);
  }
  function K(c$1) {
    var g;
    P.wasMoved(c$1) && (a.disabled || (g = o$12.virtual.value) != null && g.disabled(a.value) || v.value && (o$12.optionsPropsRef.value.hold || o$12.goToOption(c.Nothing)));
  }
  return () => {
    let { disabled: c2 } = a, g = { active: v.value, selected: s2.value, disabled: c2 }, k = { id: u2, ref: e2, role: "option", tabIndex: c2 === true ? void 0 : -1, "aria-disabled": c2 === true ? true : void 0, "aria-selected": s2.value, disabled: void 0, onClick: d2, onFocus: V, onPointerenter: D, onMouseenter: D, onPointermove: L, onMousemove: L, onPointerleave: K, onMouseleave: K }, n2 = T(a, ["order", "value"]);
    return A({ ourProps: k, theirProps: n2, slot: g, attrs: r, slots: T$1, name: "ComboboxOption" });
  };
} });

export { Ze as Z, at as a, lt as l, ot as o, tt as t };
//# sourceMappingURL=combobox-DngOzaUq.mjs.map
