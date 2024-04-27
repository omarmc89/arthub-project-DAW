import __nuxt_component_0 from "./Icon-CzmPTvOf.js";
import { u as useId } from "./id-TmqiOEtL.js";
import { ref, provide, computed, defineComponent, onMounted, onUnmounted, unref, inject, watch, h, Fragment, toRef, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { d as d$1, p } from "./form-Bxt8P_zR.js";
import { I, A, o, E as E$1, T, a as o$1, l } from "./keyboard-StezvEZ1.js";
import { s } from "./use-resolve-button-type-BiIC-zUM.js";
import { f, s as s$1 } from "./hidden-BCOMh9xa.js";
import { k } from "./description-CT80-Yva.js";
import { twMerge, twJoin } from "tailwind-merge";
import { u as useUI } from "./tooltip-BFZnfYSQ.js";
import { u as useFormGroup } from "./useFormGroup-4DdrZmPB.js";
import { _ as _export_sfc, m as mergeConfig, g as appConfig } from "../server.mjs";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import "./Icon-oe6GKycP.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-DmJTZe-0.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@vueuse/core";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
const toggle = {
  base: "relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
  rounded: "rounded-full",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  active: "bg-{color}-500 dark:bg-{color}-400",
  inactive: "bg-gray-200 dark:bg-gray-700",
  size: {
    "2xs": "h-3 w-5",
    xs: "h-3.5 w-6",
    sm: "h-4 w-7",
    md: "h-5 w-9",
    lg: "h-6 w-11",
    xl: "h-7 w-[3.25rem]",
    "2xl": "h-8 w-[3.75rem]"
  },
  container: {
    base: "pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",
    active: {
      "2xs": "translate-x-2 rtl:-translate-x-2",
      xs: "translate-x-2.5 rtl:-translate-x-2.5",
      sm: "translate-x-3 rtl:-translate-x-3",
      md: "translate-x-4 rtl:-translate-x-4",
      lg: "translate-x-5 rtl:-translate-x-5",
      xl: "translate-x-6 rtl:-translate-x-6",
      "2xl": "translate-x-7 rtl:-translate-x-7"
    },
    inactive: "translate-x-0 rtl:-translate-x-0",
    size: {
      "2xs": "h-2 w-2",
      xs: "h-2.5 w-2.5",
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
      "2xl": "h-7 w-7"
    }
  },
  icon: {
    base: "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
    active: "opacity-100 ease-in duration-200",
    inactive: "opacity-0 ease-out duration-100",
    size: {
      "2xs": "h-2 w-2",
      xs: "h-2 w-2",
      sm: "h-2 w-2",
      md: "h-3 w-3",
      lg: "h-4 w-4",
      xl: "h-5 w-5",
      "2xl": "h-6 w-6"
    },
    on: "text-{color}-500 dark:text-{color}-400",
    off: "text-gray-400 dark:text-gray-500",
    loading: "animate-spin text-{color}-500 dark:text-{color}-400"
  },
  default: {
    onIcon: null,
    offIcon: null,
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    color: "primary",
    size: "md"
  }
};
let a = Symbol("LabelContext");
function d() {
  let t = inject(a, null);
  if (t === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, d), n;
  }
  return t;
}
function E({ slot: t = {}, name: n = "Label", props: i = {} } = {}) {
  let e = ref([]);
  function o2(r) {
    return e.value.push(r), () => {
      let l2 = e.value.indexOf(r);
      l2 !== -1 && e.value.splice(l2, 1);
    };
  }
  return provide(a, { register: o2, slot: t, name: n, props: i }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t, { slots: n, attrs: i }) {
  var r;
  let e = (r = t.id) != null ? r : `headlessui-label-${I()}`, o2 = d();
  return onMounted(() => onUnmounted(o2.register(e))), () => {
    let { name: l2 = "Label", slot: p2 = {}, props: c = {} } = o2, { passive: f2, ...s2 } = t, u = { ...Object.entries(c).reduce((b, [g2, m]) => Object.assign(b, { [g2]: unref(m) }), {}), id: e };
    return f2 && (delete u.onClick, delete u.htmlFor, delete s2.onClick), A({ ourProps: u, theirProps: s2, slot: p2, attrs: i, slots: n, name: l2 });
  };
} });
let g = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l2, { slots: c, attrs: o2 }) {
  let r = ref(null), p2 = E({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var t;
    return (t = r.value) == null ? void 0 : t.id;
  }), onClick(t) {
    r.value && (t.currentTarget.tagName === "LABEL" && t.preventDefault(), r.value.click(), r.value.focus({ preventScroll: true }));
  } } }), f2 = k({ name: "SwitchDescription" });
  return provide(g, { switchRef: r, labelledby: p2, describedby: f2 }), () => A({ theirProps: l2, ourProps: {}, slot: {}, slots: c, attrs: o2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null } }, inheritAttrs: false, setup(l2, { emit: c, attrs: o$2, slots: r, expose: p$1 }) {
  var h$1;
  let f$1 = (h$1 = l2.id) != null ? h$1 : `headlessui-switch-${I()}`, n = inject(g, null), [t, s$2] = d$1(computed(() => l2.modelValue), (e) => c("update:modelValue", e), computed(() => l2.defaultChecked));
  function m() {
    s$2(!t.value);
  }
  let k2 = ref(null), u = n === null ? k2 : n.switchRef, C = s(computed(() => ({ as: l2.as, type: o$2.type })), u);
  p$1({ el: u, $el: u });
  function E2(e) {
    e.preventDefault(), m();
  }
  function L(e) {
    e.key === o$1.Space ? (e.preventDefault(), m()) : e.key === o$1.Enter && p(e.currentTarget);
  }
  function D(e) {
    e.preventDefault();
  }
  let d2 = computed(() => {
    var e, i;
    return (i = (e = o(u)) == null ? void 0 : e.closest) == null ? void 0 : i.call(e, "form");
  });
  return onMounted(() => {
    watch([d2], () => {
      if (!d2.value || l2.defaultChecked === void 0)
        return;
      function e() {
        s$2(l2.defaultChecked);
      }
      return d2.value.addEventListener("reset", e), () => {
        var i;
        (i = d2.value) == null || i.removeEventListener("reset", e);
      };
    }, { immediate: true });
  }), () => {
    let { name: e, value: i, form: R, ...K } = l2, x = { checked: t.value }, T$1 = { id: f$1, ref: u, role: "switch", type: C.value, tabIndex: 0, "aria-checked": t.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: E2, onKeyup: L, onKeypress: D };
    return h(Fragment, [e != null && t.value != null ? h(f, E$1({ features: s$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t.value, form: R, name: e, value: i })) : null, A({ ourProps: T$1, theirProps: { ...o$2, ...T(K, ["modelValue", "defaultChecked"]) }, slot: x, attrs: o$2, slots: r, name: "Switch" })]);
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.toggle, toggle);
const _sfc_main = defineComponent({
  components: {
    HSwitch: ue,
    UIcon: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: String,
      default: () => config.default.onIcon
    },
    offIcon: {
      type: String,
      default: () => config.default.offIcon
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("toggle", toRef(props, "ui"), config);
    const { emitFormChange, color, inputId, name } = useFormGroup(props);
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        emit("change", value);
        emitFormChange();
      }
    });
    const switchClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.rounded,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && (active.value ? ui.value.active : ui.value.inactive).replaceAll("{color}", color.value)
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container.size[props.size],
        active.value ? ui.value.container.active[props.size] : ui.value.container.inactive
      );
    });
    const onIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.on.replaceAll("{color}", color.value)
      );
    });
    const offIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.off.replaceAll("{color}", color.value)
      );
    });
    const loadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.loading.replaceAll("{color}", color.value)
      );
    });
    l(() => useId("$mRW6KdlcYH"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      active,
      switchClass,
      containerClass,
      onIconClass,
      offIconClass,
      loadingIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HSwitch = resolveComponent("HSwitch");
  const _component_UIcon = __nuxt_component_0;
  _push(ssrRenderComponent(_component_HSwitch, mergeProps({
    id: _ctx.inputId,
    modelValue: _ctx.active,
    "onUpdate:modelValue": ($event) => _ctx.active = $event,
    name: _ctx.name,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.switchClass
  }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(_ctx.containerClass)}"${_scopeId}>`);
        if (_ctx.loading) {
          _push2(`<span class="${ssrRenderClass([_ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.loadingIcon,
            class: _ctx.loadingIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.onIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.onIcon,
            class: _ctx.onIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.offIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.offIcon,
            class: _ctx.offIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", { class: _ctx.containerClass }, [
            _ctx.loading ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.loadingIcon,
                class: _ctx.loadingIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.onIcon ? (openBlock(), createBlock("span", {
              key: 1,
              class: [_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.onIcon,
                class: _ctx.onIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.offIcon ? (openBlock(), createBlock("span", {
              key: 2,
              class: [_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.offIcon,
                class: _ctx.offIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Toggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Toggle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Toggle as default
};
//# sourceMappingURL=Toggle-BevsIpB3.js.map
