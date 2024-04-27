import __nuxt_component_1 from './Skeleton-Cddcb8OQ.mjs';
import { u as useToast } from './useToast-Di3LiZSd.mjs';
import { a as useRoute, c as useRouter, b as useRuntimeConfig } from './server.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import { u as useFetch } from './fetch-8GViaUKS.mjs';
import { u as useAuthStore } from './auth-DtbxY98P.mjs';
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

const useUserLoggedData = async () => {
  const runtimeConfig = useRuntimeConfig();
  let artistData = null;
  const { userLogged, sessionToken } = useAuthStore();
  if (userLogged) {
    const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}search/artist/?user_id=${userLogged.pk}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`
      }
    }, "$5fqoZ5Ny2k");
    if (data) {
      artistData = data.value;
    } else
      return error;
  } else {
    console.error("No se pudo obtener el usuario logueado");
    return null;
  }
  return artistData;
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useToast();
    const route = useRoute();
    useRouter();
    const params = route.params;
    ref(params.id);
    const isPhoto = ref(true);
    const pendingFetch = ref(false);
    ref("");
    ref("");
    ref(false);
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
    [__temp, __restore] = withAsyncContext(() => useUserLoggedData()), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USkeleton = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-row" }, _attrs))}><article class="image-container">`);
      if (unref(artwork).image_url !== "") {
        _push(`<img${ssrRenderAttr("src", unref(artwork).image_url)}${ssrRenderAttr("alt", unref(artwork).title)}>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(artwork).image_url === "") {
        _push(ssrRenderComponent(_component_USkeleton, {
          class: "h-[600px] w-[500px] mr-32",
          ui: { rounded: "rounded-xl" }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article><article class="form-container flex items-center justify-center"><form class="artwork-form space-y-4 text-slate-900"><div><div class="form-label"><label for="title">Title</label><input${ssrRenderAttr("value", unref(artwork).title)} id="title" name="title" type="text" class="form-control rounded-full bg-white"></div><div class="form-label"><label for="description">Description</label><input${ssrRenderAttr("value", unref(artwork).description)} id="description" name="description" type="text" class="form-control rounded-full bg-white"></div><div class="form-label"><label for="image_url">Image URL</label><input${ssrRenderAttr("value", unref(artwork).image_url)} id="image_url" name="image_url" type="text" class="form-control rounded-full bg-white"></div><div class="form-label"><label for="price">Price</label><input${ssrRenderAttr("value", unref(artwork).price)} id="price" name="price" type="text" class="form-control rounded-full bg-white"></div>`);
      if (unref(isPhoto) && unref(artworkDetails)) {
        _push(`<div class="form-label"><label for="style">Style</label><input${ssrRenderAttr("value", unref(artwork).style)} id="style" name="style" type="text" class="form-control rounded-full bg-white"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isPhoto) && unref(artworkDetails)) {
        _push(`<div class="form-label"><label for="width">Width</label><input${ssrRenderAttr("value", unref(artwork).width)} id="width" name="width" type="text" class="form-control rounded-full bg-white"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isPhoto) && unref(artworkDetails)) {
        _push(`<div class="form-label"><label for="height">Height</label><input${ssrRenderAttr("value", unref(artwork).height)} id="height" name="height" type="text" class="form-control rounded-full bg-white"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(pendingFetch)) ? " disabled" : ""} class="btn btn-primary">`);
      if (unref(pendingFetch)) {
        _push(`<span>Submitting...</span>`);
      } else {
        _push(`<span>Submit</span>`);
      }
      _push(`</button></form></article></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CcKJPj3I.mjs.map
