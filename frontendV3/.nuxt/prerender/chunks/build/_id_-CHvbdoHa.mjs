import { _ as __nuxt_component_0 } from './ArtworkShowSkeleton-BI2epk6-.mjs';
import { _ as _export_sfc, a as useRoute, b as useRuntimeConfig } from './server.mjs';
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
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();
    const params = route.params;
    ref(params.id);
    const pendingFetch = ref(true);
    ref({});
    console.log(runtimeConfig.public.baseUrl);
    ref({
      first_name: "",
      last_name: "",
      avatar: ""
    });
    const user = ref({
      username: "",
      fist_name: "",
      last_name: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtworkShowSkeleton = __nuxt_component_0;
      _push(`<!--[-->`);
      if (unref(pendingFetch)) {
        _push(ssrRenderComponent(_component_ArtworkShowSkeleton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(pendingFetch)) {
        _push(`<div class="flex flex-col h-100" data-v-60854b41><section class="flex flex-row gap-8 text-center items-center justify-center h-2/6" data-v-60854b41><h1 class="title drop-shadow-xl" data-v-60854b41>${ssrInterpolate(unref(user).username)}</h1></section><section class="flex flex-row gap-8 h-4/6" data-v-60854b41><article class="w-1/2" data-v-60854b41><div class="image-container h-full flex items-center justify-center" data-v-60854b41><img${ssrRenderAttr("src", unref(user).avatar)}${ssrRenderAttr("alt", unref(user).username)} class="max-w-full max-h-full" data-v-60854b41></div></article><article class="w-1/2" data-v-60854b41><div class="details-container flex flex-col items-center justify-around h-full space-y-4 text-slate-900" data-v-60854b41><h1 class="title drop-shadow-xl" data-v-60854b41>${ssrInterpolate(unref(user).first_name)}</h1><p class="title drop-shadow-xl" data-v-60854b41>${ssrInterpolate(unref(user).last_name)}</p><p class="info uppercase" data-v-60854b41>${ssrInterpolate(unref(user).email)}</p></div></article></section></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60854b41"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CHvbdoHa.mjs.map
