import __nuxt_component_0$1 from "./Link-BHtV3Xy5.js";
import { _ as __nuxt_component_1 } from "./Avatar-B1BLJCRM.js";
import __nuxt_component_0 from "./Icon-CzmPTvOf.js";
import __nuxt_component_3 from "./Badge-WeCbe2cg.js";
import __nuxt_component_4 from "./Divider-irWI7a0Q.js";
import { defineComponent, toRef, computed, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { u as useUI } from "./tooltip-BFZnfYSQ.js";
import { _ as _export_sfc, m as mergeConfig, g as appConfig } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { a as getULinkProps } from "./link-WrO2rrG0.js";
import "./nuxt-link-DmFmIQVc.js";
import "ufo";
import "ohash";
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
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@vueuse/core";
import "cookie-es";
import "pinia-plugin-persistedstate";
import "./Icon-oe6GKycP.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-DmJTZe-0.js";
import "./useButtonGroup-CFFBsGJV.js";
const verticalNavigation = {
  wrapper: "relative",
  base: "group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",
  ring: "focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
  padding: "px-2.5 py-1.5",
  width: "w-full",
  rounded: "rounded-md",
  font: "font-medium",
  size: "text-sm",
  active: "text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",
  inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
  label: "truncate relative",
  icon: {
    base: "flex-shrink-0 w-5 h-5 relative",
    active: "text-gray-700 dark:text-gray-200",
    inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  badge: {
    base: "flex-shrink-0 ml-auto relative rounded",
    color: "gray",
    variant: "solid",
    size: "xs"
  },
  divider: {
    wrapper: {
      base: "p-2"
    }
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.verticalNavigation, verticalNavigation);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1,
    UBadge: __nuxt_component_3,
    ULink: __nuxt_component_0$1,
    UDivider: __nuxt_component_4
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
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
  setup(props) {
    const { ui, attrs } = useUI("verticalNavigation", toRef(props, "ui"), config, toRef(props, "class"));
    const sections = computed(() => Array.isArray(props.links[0]) ? props.links : [props.links]);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      sections,
      getULinkProps,
      twMerge,
      twJoin
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UIcon = __nuxt_component_0;
  const _component_UBadge = __nuxt_component_3;
  const _component_UDivider = __nuxt_component_4;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.sections, (section, sectionIndex) => {
    _push(`<ul><!--[-->`);
    ssrRenderList(section, (link, index) => {
      _push(`<li>`);
      _push(ssrRenderComponent(_component_ULink, mergeProps(_ctx.getULinkProps(link), {
        class: [_ctx.ui.base, _ctx.ui.padding, _ctx.ui.width, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.font, _ctx.ui.size],
        "active-class": _ctx.ui.active,
        "inactive-class": _ctx.ui.inactive,
        onClick: link.click,
        onKeyup: ($event) => $event.target.blur()
      }), {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", {
              link,
              isActive
            }, () => {
              if (link.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "icon", {
              link,
              isActive
            }, () => {
              if (link.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {
              link,
              isActive
            }, () => {
              if (link.label) {
                _push2(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.label, link.labelClass))}"${_scopeId}>`);
                if (isActive) {
                  _push2(`<span class="sr-only"${_scopeId}> Current page: </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(link.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "badge", {
              link,
              isActive
            }, () => {
              if (link.badge) {
                _push2(ssrRenderComponent(_component_UBadge, mergeProps({
                  size: _ctx.ui.badge.size,
                  color: _ctx.ui.badge.color,
                  variant: _ctx.ui.badge.variant,
                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                }, {
                  class: _ctx.ui.badge.base
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", {
                link,
                isActive
              }, () => [
                link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 0 }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, 16, ["class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "icon", {
                link,
                isActive
              }, () => [
                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                  key: 0,
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default", {
                link,
                isActive
              }, () => [
                link.label ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.twMerge(_ctx.ui.label, link.labelClass)
                }, [
                  isActive ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "sr-only"
                  }, " Current page: ")) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.label), 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "badge", {
                link,
                isActive
              }, () => [
                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({ key: 0 }, {
                  size: _ctx.ui.badge.size,
                  color: _ctx.ui.badge.color,
                  variant: _ctx.ui.badge.variant,
                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                }, {
                  class: _ctx.ui.badge.base
                }), null, 16, ["class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]-->`);
    if (sectionIndex < _ctx.sections.length - 1) {
      _push(ssrRenderComponent(_component_UDivider, {
        ui: _ctx.ui.divider
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</ul>`);
  });
  _push(`<!--]--></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/VerticalNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerticalNavigation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  VerticalNavigation as default
};
//# sourceMappingURL=VerticalNavigation-B_TH-Boe.js.map
