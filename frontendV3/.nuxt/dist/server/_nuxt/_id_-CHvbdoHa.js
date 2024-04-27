import { _ as __nuxt_component_0 } from "./ArtworkShowSkeleton-BI2epk6-.js";
import { _ as _export_sfc, a as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./auth-DtbxY98P.js";
import "./Skeleton-Cddcb8OQ.js";
import "tailwind-merge";
import "./tooltip-BFZnfYSQ.js";
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
import "./fetch-8GViaUKS.js";
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
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CHvbdoHa.js.map
