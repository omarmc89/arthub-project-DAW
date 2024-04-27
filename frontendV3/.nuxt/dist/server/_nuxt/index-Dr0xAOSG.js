import __nuxt_component_0$1 from "./Carousel-r3I67qMX.js";
import __nuxt_component_1$1 from "./Skeleton-Cddcb8OQ.js";
import { mergeProps, useSSRContext, ref, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "hookable";
import "./Button-Ch2UgfmZ.js";
import "./Link-BHtV3Xy5.js";
import "./nuxt-link-DmFmIQVc.js";
import "ufo";
import "ohash";
import "./link-WrO2rrG0.js";
import "#internal/nitro";
import "ofetch";
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
import "pinia-plugin-persistedstate";
import "./Icon-CzmPTvOf.js";
import "./Icon-oe6GKycP.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-DmJTZe-0.js";
import "./tooltip-BFZnfYSQ.js";
import "./useButtonGroup-CFFBsGJV.js";
import "./button-DK1nGquD.js";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_USkeleton = __nuxt_component_1$1;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_USkeleton, {
    class: "h-[600px] w-[1000px] m-4",
    ui: { rounded: "rounded-xl" }
  }, null, _parent));
  _push(`</article>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselSkeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "ArtworkCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const fetching = ref(true);
    const imageUrls = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_0$1;
      const _component_CarouselSkeleton = __nuxt_component_1;
      _push(`<!--[-->`);
      if (!unref(fetching)) {
        _push(ssrRenderComponent(_component_UCarousel, {
          items: unref(imageUrls),
          ui: { item: "basis-full md:basis-1/2 lg:basis-1/3 snap-start" },
          class: "rounded-lg overflow-hidden",
          indicators: "",
          arrows: ""
        }, {
          default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item)} class="object-cover" draggable="false"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: item,
                  class: "object-cover",
                  draggable: "false"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(fetching)) {
        _push(ssrRenderComponent(_component_CarouselSkeleton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArtworkCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ArtworkCarousel = __nuxt_component_0;
  _push(`<!--[--><section class="main-banner flex flex-col items-center justify-center" data-v-b6ae57ab><h1 class="title flex flex-col items-center m-0 p-0" data-v-b6ae57ab><span data-v-b6ae57ab> Welcome to your <span class="letter-a text-purple-600 drop-shadow-lg uppercase" data-v-b6ae57ab>a</span><span class="letter-r text-pink-400 drop-shadow-lg uppercase" data-v-b6ae57ab>r</span><span class="letter-t text-teal-400 drop-shadow-lg uppercase" data-v-b6ae57ab>t</span> community </span><span data-v-b6ae57ab>Discover <span class="bg-yellow-400 rounded-xl p-2 drop-shadow-lg" data-v-b6ae57ab>brilliant</span> artists and their works</span></h1></section><section class="sample-artworks flex flex-col items-center justify-center mt-12" data-v-b6ae57ab><p class="description animate-bounce mb-8 text-center" data-v-b6ae57ab>Check out some of our collection!</p>`);
  _push(ssrRenderComponent(_component_ArtworkCarousel, null, null, _parent));
  _push(`</section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b6ae57ab"]]);
export {
  index as default
};
//# sourceMappingURL=index-Dr0xAOSG.js.map
