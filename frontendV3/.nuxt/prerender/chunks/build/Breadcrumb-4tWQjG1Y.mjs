import __nuxt_component_0$1 from './Link-BHtV3Xy5.mjs';
import __nuxt_component_0 from './Icon-CzmPTvOf.mjs';
import { defineComponent, toRef, useSSRContext, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { twMerge, twJoin } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import { u as useUI } from './tooltip-BFZnfYSQ.mjs';
import { m as mergeConfig, g as appConfig, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import { a as getULinkProps } from './link-WrO2rrG0.mjs';
import './nuxt-link-DmFmIQVc.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ufo/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/unctx/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/h3/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/unhead/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/radix3/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/defu/dist/defu.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/klona/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/destr/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/pinia-plugin-persistedstate/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/scule/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/pathe/dist/index.mjs';
import './Icon-oe6GKycP.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/iconify.mjs';
import './index-DmJTZe-0.mjs';

const breadcrumb = {
  wrapper: "relative",
  ol: "flex items-center gap-x-1.5",
  li: "flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",
  base: "flex items-center gap-x-1.5 group font-semibold min-w-0",
  label: "block truncate",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    active: "",
    inactive: ""
  },
  divider: {
    base: "flex-shrink-0 w-5 h-5"
  },
  active: "text-primary-500 dark:text-primary-400",
  inactive: " hover:text-gray-700 dark:hover:text-gray-200",
  default: {
    divider: "i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.breadcrumb, breadcrumb);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_0,
    ULink: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
    },
    divider: {
      type: String,
      default: () => config.default.divider
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
    const { ui, attrs } = useUI("breadcrumb", toRef(props, "ui"), config, toRef(props, "class"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      getULinkProps,
      twMerge,
      twJoin
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UIcon = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    "aria-label": "Breadcrumb",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><ol class="${ssrRenderClass(_ctx.ui.ol)}"><!--[-->`);
  ssrRenderList(_ctx.links, (link, index) => {
    _push(`<li class="${ssrRenderClass(_ctx.ui.li)}">`);
    _push(ssrRenderComponent(_component_ULink, mergeProps({
      as: "span",
      class: [_ctx.ui.base, index === _ctx.links.length - 1 ? _ctx.ui.active : !!link.to ? _ctx.ui.inactive : ""]
    }, _ctx.getULinkProps(link), {
      "aria-current": index === _ctx.links.length - 1 ? "page" : void 0
    }), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "icon", {
            link,
            index,
            isActive: index === _ctx.links.length - 1
          }, () => {
            if (link.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: link.icon,
                class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, index === _ctx.links.length - 1 ? _ctx.ui.icon.active : !!link.to ? _ctx.ui.icon.inactive : ""), link.iconClass)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "default", {
            link,
            index,
            isActive: index === _ctx.links.length - 1
          }, () => {
            if (link.label) {
              _push2(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.label, link.labelClass))}"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "icon", {
              link,
              index,
              isActive: index === _ctx.links.length - 1
            }, () => [
              link.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: link.icon,
                class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, index === _ctx.links.length - 1 ? _ctx.ui.icon.active : !!link.to ? _ctx.ui.icon.inactive : ""), link.iconClass)
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "default", {
              link,
              index,
              isActive: index === _ctx.links.length - 1
            }, () => [
              link.label ? (openBlock(), createBlock("span", {
                key: 0,
                class: _ctx.twMerge(_ctx.ui.label, link.labelClass)
              }, toDisplayString(link.label), 3)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    if (index < _ctx.links.length - 1) {
      ssrRenderSlot(_ctx.$slots, "divider", {}, () => {
        if (_ctx.divider) {
          _push(`<!--[-->`);
          if (_ctx.divider.startsWith("i-")) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: _ctx.divider,
              class: _ctx.ui.divider.base,
              role: "presentation"
            }, null, _parent));
          } else {
            _push(`<span role="presentation">${ssrInterpolate(_ctx.divider)}</span>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ol></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Breadcrumb as default };
//# sourceMappingURL=Breadcrumb-4tWQjG1Y.mjs.map
