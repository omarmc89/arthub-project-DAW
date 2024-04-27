import { _ as __nuxt_component_0 } from './ArtworkShowSkeleton-BI2epk6-.mjs';
import { _ as _export_sfc, a as useRoute } from './server.mjs';
import { ref, unref, useSSRContext } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import './Skeleton-Cddcb8OQ.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import './tooltip-BFZnfYSQ.mjs';
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
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ufo/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/destr/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ohash/dist/index.mjs';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const params = route.params;
    ref(params.id);
    const isPhoto = ref(true);
    const pendingFetch = ref(true);
    ref({});
    const artworkDetails = ref({
      style: "",
      width: "",
      height: ""
    });
    const artwork = ref({
      title: "",
      description: "",
      image_url: "",
      price: "",
      style: "",
      width: "",
      height: ""
    });
    const user = ref({
      username: ""
    });
    ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtworkShowSkeleton = __nuxt_component_0;
      _push(`<!--[-->`);
      if (unref(pendingFetch)) {
        _push(ssrRenderComponent(_component_ArtworkShowSkeleton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(pendingFetch)) {
        _push(`<div class="flex flex-col h-100" data-v-df6ea22d><section class="flex flex-row gap-8 text-center items-center justify-center h-2/6" data-v-df6ea22d><h1 class="title drop-shadow-xl" data-v-df6ea22d>${ssrInterpolate(unref(artwork).title)}</h1></section><section class="flex flex-row gap-8 h-4/6" data-v-df6ea22d><article class="w-1/2" data-v-df6ea22d><div class="image-container h-full flex items-center justify-center" data-v-df6ea22d><img${ssrRenderAttr("src", unref(artwork).image_url)}${ssrRenderAttr("alt", unref(artwork).title)} class="max-w-full max-h-full" data-v-df6ea22d></div></article><article class="w-1/2" data-v-df6ea22d><div class="details-container flex flex-col items-center justify-around h-full space-y-4 text-slate-900" data-v-df6ea22d><h1 class="title drop-shadow-xl" data-v-df6ea22d> \u{1F9D1}\u{1F3FD}\u200D\u{1F4BB} ${ssrInterpolate(unref(user).username)}</h1><p class="info border-2 bg-slate-800 bg-opacity-30 rounded-xl" data-v-df6ea22d>${ssrInterpolate(unref(artwork).description)}</p><p class="info uppercase" data-v-df6ea22d>${ssrInterpolate(unref(artworkDetails).style)}</p><p class="info" data-v-df6ea22d>${ssrInterpolate(unref(artwork).price)} \u20AC </p>`);
        if (!unref(isPhoto)) {
          _push(`<div data-v-df6ea22d><p class="info" data-v-df6ea22d>Width: ${ssrInterpolate(unref(artworkDetails).width)}</p><p class="info" data-v-df6ea22d>Height: ${ssrInterpolate(unref(artworkDetails).height)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></article></section></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artworks/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df6ea22d"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-0ThI4Y2B.mjs.map
