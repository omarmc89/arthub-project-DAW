import { _ as __nuxt_component_0$1 } from "./nuxt-link-DmFmIQVc.js";
import { _ as _export_sfc, c as useRouter } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "./auth-DtbxY98P.js";
import __nuxt_component_2 from "./Container-qNANbakm.js";
import __nuxt_component_3 from "./Notifications-BDZI3SUf.js";
import { _ as __nuxt_component_4 } from "./AppFooter-C9ECVXRM.js";
import "ufo";
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
import "tailwind-merge";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./fetch-8GViaUKS.js";
import "./tooltip-BFZnfYSQ.js";
import "./Notification-B9d_BVZ4.js";
import "./Icon-CzmPTvOf.js";
import "./Icon-oe6GKycP.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-DmJTZe-0.js";
import "./Avatar-B1BLJCRM.js";
import "./Button-Ch2UgfmZ.js";
import "./Link-BHtV3Xy5.js";
import "./link-WrO2rrG0.js";
import "./useButtonGroup-CFFBsGJV.js";
import "./button-DK1nGquD.js";
import "./useToast-Di3LiZSd.js";
const _sfc_main$1 = {
  __name: "AppHeaderWithoutNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-between w-full px-4 z-10 mt-2" }, _attrs))} data-v-a1499fd5><section class="flex flex-col w-full h-auto" data-v-a1499fd5><article class="flex text-slate-900 items-center justify-center w-full h-auto py-16" data-v-a1499fd5><a class="no-underline" href="#" data-v-a1499fd5><span class="title text-center text-2xl py-16" data-v-a1499fd5>ArtHUB</span></a></article><article class="w-full flex-grow items-center justify-center" id="nav-content" data-v-a1499fd5><section class="flex w-full flex-row gap-x-6 items-center justify-around" data-v-a1499fd5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "app-link text-center text-slate-200 p-2 bg-slate-900 rounded-lg hover:bg-slate-200 hover:text-slate-900",
        style: { "float": "right" },
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to homepage `);
          } else {
            return [
              createTextVNode(" Back to homepage ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></article></section></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeaderWithoutNavbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a1499fd5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeaderWithoutNavbar = __nuxt_component_0;
  const _component_UContainer = __nuxt_component_2;
  const _component_UNotifications = __nuxt_component_3;
  const _component_AppFooter = __nuxt_component_4;
  _push(`<!--[--><header data-v-06213584>`);
  _push(ssrRenderComponent(_component_AppHeaderWithoutNavbar, null, null, _parent));
  _push(`</header><div class="background" data-v-06213584></div>`);
  _push(ssrRenderComponent(_component_UContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_UNotifications, null, null, _parent));
  _push(`<footer data-v-06213584>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-06213584"]]);
export {
  custom as default
};
//# sourceMappingURL=custom-DKCYM2Lv.js.map
