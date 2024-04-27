import __nuxt_component_0 from "./Icon-CzmPTvOf.js";
import { _ as __nuxt_component_1 } from "./Avatar-B1BLJCRM.js";
import { u as useId } from "./id-TmqiOEtL.js";
import { defineComponent, toRef, computed, ref, watch, resolveComponent, mergeProps, withCtx, renderSlot, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, createTextVNode, Transition, useSSRContext } from "vue";
import { Z as Ze, t as tt, l as lt, a as at, o as ot } from "./combobox-DngOzaUq.js";
import { l } from "./keyboard-StezvEZ1.js";
import { useDebounceFn, computedAsync } from "@vueuse/core";
import { defu } from "defu";
import { twMerge, twJoin } from "tailwind-merge";
import { u as useUI, g as get, i as input, a as inputMenu } from "./tooltip-BFZnfYSQ.js";
import { u as usePopper } from "./usePopper-CcmLcrd_.js";
import { u as useFormGroup } from "./useFormGroup-4DdrZmPB.js";
import { _ as _export_sfc, m as mergeConfig, g as appConfig } from "../server.mjs";
import { u as useInjectButtonGroup } from "./useButtonGroup-CFFBsGJV.js";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
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
import "klona";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "@tanstack/vue-virtual";
import "./form-Bxt8P_zR.js";
import "./use-outside-click-DPs8-blD.js";
import "./focus-management-BvtO1QQs.js";
import "./use-resolve-button-type-BiIC-zUM.js";
import "./calculate-active-index-D7B59bcw.js";
import "./hidden-BCOMh9xa.js";
import "./open-closed-BDzQJ33n.js";
import "./disposables-lSGnSUs6.js";
import "./micro-task-B6uncIso.js";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.inputMenu, inputMenu);
const _sfc_main = defineComponent({
  components: {
    HCombobox: Ze,
    HComboboxButton: tt,
    HComboboxOptions: lt,
    HComboboxOption: at,
    HComboboxInput: ot,
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => configMenu.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nullable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    search: {
      type: Function,
      default: void 0
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    debounce: {
      type: Number,
      default: 200
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("inputMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        return props.query ?? internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const label = computed(() => {
      if (!props.modelValue) {
        return;
      }
      if (props.valueAttribute) {
        const option = props.options.find((option2) => option2[props.valueAttribute] === props.modelValue);
        return option ? option[props.optionAttribute] : null;
      } else {
        return ["string", "number"].includes(typeof props.modelValue) ? props.modelValue : props.modelValue[props.optionAttribute];
      }
    });
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = props.search && typeof props.search === "function" ? useDebounceFn(props.search, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(value) {
      query.value = "";
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    }
    function onQueryChange(event) {
      query.value = event.target.value;
    }
    l(() => useId("$2NLPEfaykI"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      label,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onQueryChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HCombobox = resolveComponent("HCombobox");
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UIcon = __nuxt_component_0;
  const _component_HComboboxButton = resolveComponent("HComboboxButton");
  const _component_HComboboxOptions = resolveComponent("HComboboxOptions");
  const _component_HComboboxOption = resolveComponent("HComboboxOption");
  const _component_UAvatar = __nuxt_component_1;
  _push(ssrRenderComponent(_component_HCombobox, mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    disabled: _ctx.disabled,
    nullable: _ctx.nullable,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass(_ctx.uiMenu.trigger)}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HComboboxInput, mergeProps({
          id: _ctx.inputId,
          name: _ctx.name,
          required: _ctx.required,
          placeholder: _ctx.placeholder,
          disabled: _ctx.disabled,
          class: _ctx.inputClass,
          autocomplete: "off"
        }, _ctx.attrs, {
          "display-value": () => _ctx.query ? _ctx.query : _ctx.label,
          onChange: _ctx.onQueryChange
        }), null, _parent2, _scopeId));
        if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
          _push2(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass
            }, null, _parent2, _scopeId));
          }, _push2, _parent2, _scopeId);
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
          _push2(ssrRenderComponent(_component_HComboboxButton, {
            ref: "trigger",
            class: _ctx.trailingWrapperIconClass
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "trailing", {
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: _ctx.trailingIconName,
                    class: _ctx.trailingIconClass
                  }, null, _parent3, _scopeId2));
                }, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => [
                    createVNode(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass
                    }, null, 8, ["name", "class"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HComboboxOptions, {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  _push3(ssrRenderComponent(_component_HComboboxOption, {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
                if (_ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(` No options. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(_component_HComboboxOption, {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(" No options. ")
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", {
            class: _ctx.uiMenu.trigger
          }, [
            createVNode(_component_HComboboxInput, mergeProps({
              id: _ctx.inputId,
              name: _ctx.name,
              required: _ctx.required,
              placeholder: _ctx.placeholder,
              disabled: _ctx.disabled,
              class: _ctx.inputClass,
              autocomplete: "off"
            }, _ctx.attrs, {
              "display-value": () => _ctx.query ? _ctx.query : _ctx.label,
              onChange: _ctx.onQueryChange
            }), null, 16, ["id", "name", "required", "placeholder", "disabled", "class", "display-value", "onChange"]),
            _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
              key: 0,
              class: _ctx.leadingWrapperIconClass
            }, [
              renderSlot(_ctx.$slots, "leading", {
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode(_component_UIcon, {
                  name: _ctx.leadingIconName,
                  class: _ctx.leadingIconClass
                }, null, 8, ["name", "class"])
              ])
            ], 2)) : createCommentVNode("", true),
            _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock(_component_HComboboxButton, {
              key: 1,
              ref: "trigger",
              class: _ctx.trailingWrapperIconClass
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "trailing", {
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode(_component_UIcon, {
                    name: _ctx.trailingIconName,
                    class: _ctx.trailingIconClass
                  }, null, 8, ["name", "class"])
                ])
              ]),
              _: 3
            }, 8, ["class"])) : createCommentVNode("", true)
          ], 2),
          open ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HComboboxOptions, {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                        return openBlock(), createBlock(_component_HComboboxOption, {
                          key: index,
                          as: "template",
                          value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                          disabled: option.disabled
                        }, {
                          default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option,
                                  active,
                                  selected
                                }, () => [
                                  option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: option.icon,
                                    class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                    class: _ctx.uiMenu.option.avatar.base,
                                    "aria-hidden": "true"
                                  }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: _ctx.uiMenu.option.chip.base,
                                    style: { background: `#${option.chip}` }
                                  }, null, 6)) : createCommentVNode("", true),
                                  createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                ])
                              ], 2),
                              selected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                              }, [
                                createVNode(_component_UIcon, {
                                  name: _ctx.selectedIcon,
                                  class: _ctx.uiMenu.option.selectedIcon.base,
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: _ctx.uiMenu.option.empty
                      }, [
                        renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                          createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                        ])
                      ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: _ctx.uiMenu.empty
                      }, [
                        renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                          createTextVNode(" No options. ")
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 8, ["class"])
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/InputMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  InputMenu as default
};
//# sourceMappingURL=InputMenu-CXgcRFjl.js.map
