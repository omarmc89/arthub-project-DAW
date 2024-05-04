import { _ as __nuxt_component_0, r as radio } from "./Radio-8ESmpt7U.js";
import { defineComponent, toRef, provide, computed, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { u as useUI, g as get } from "./tooltip-BFZnfYSQ.js";
import { u as useFormGroup } from "./useFormGroup-4DdrZmPB.js";
import { _ as _export_sfc, m as mergeConfig, g as appConfig } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "./id-TmqiOEtL.js";
import "tailwind-merge";
import "@vueuse/core";
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
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
const radioGroup = {
  wrapper: "relative flex items-start",
  fieldset: "",
  legend: "text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",
  default: {
    color: "primary"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.radioGroup, radioGroup);
const configRadio = mergeConfig(appConfig.ui.strategy, appConfig.ui.radio, radio);
const _sfc_main = defineComponent({
  components: {
    URadio: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ""
    },
    name: {
      type: String,
      default: null
    },
    legend: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiRadio: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("radioGroup", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiRadio } = useUI("radio", toRef(props, "uiRadio"), configRadio);
    const { emitFormChange, color, name } = useFormGroup(props, config);
    provide("radio-group", { color, name });
    const onUpdate = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, get(option, props.optionAttribute));
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, get(option, props.valueAttribute));
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          value: option,
          label: option
        };
      }
      return {
        ...option,
        value: guessOptionValue(option),
        label: guessOptionText(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiRadio,
      attrs,
      normalizedOptions,
      // eslint-disable-next-line vue/no-dupe-keys
      onUpdate
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_URadio = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><fieldset${ssrRenderAttrs(mergeProps(_ctx.attrs, {
    class: _ctx.ui.fieldset
  }))}>`);
  if (_ctx.legend || _ctx.$slots.legend) {
    _push(`<legend class="${ssrRenderClass(_ctx.ui.legend)}">`);
    ssrRenderSlot(_ctx.$slots, "legend", {}, () => {
      _push(`${ssrInterpolate(_ctx.legend)}`);
    }, _push, _parent);
    _push(`</legend>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.normalizedOptions, (option) => {
    _push(ssrRenderComponent(_component_URadio, {
      key: option.value,
      label: option.label,
      "model-value": _ctx.modelValue,
      value: option.value,
      help: option.help,
      disabled: option.disabled || _ctx.disabled,
      ui: _ctx.uiRadio,
      onChange: ($event) => _ctx.onUpdate(option.value)
    }, {
      label: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "label", { option }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "label", { option })
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></fieldset></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/RadioGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RadioGroup as default
};
//# sourceMappingURL=RadioGroup-CSPittuZ.js.map
