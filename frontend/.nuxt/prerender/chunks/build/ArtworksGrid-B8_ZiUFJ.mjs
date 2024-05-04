import { _ as __nuxt_component_0$1 } from './nuxt-link-DmFmIQVc.mjs';
import { useSSRContext, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { u as useFetch } from './fetch-8GViaUKS.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';

async function useListArtworks() {
  const { data, error, pending } = await useFetch("https://arthub-api-polished-breeze-902.fly.dev/api/v1/artworks/", {
    lazy: false
  }, "$qUd4Mib2wK");
  return { data, error, pending };
}
const _sfc_main = {
  __name: "ArtworksGrid",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const artworks = ref({});
    const fetching = ref(false);
    const { data, error, loading } = ([__temp, __restore] = withAsyncContext(() => useListArtworks()), __temp = await __temp, __restore(), __temp);
    if (loading) {
      fetching.value = true;
    }
    if (data) {
      artworks.value = data.value;
      fetching.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(artworks), (artwork) => {
        _push(`<article class="card">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "image-container",
          href: "/artworks/" + artwork.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", artwork.image_url)}${ssrRenderAttr("alt", artwork.title)}${_scopeId}><p${_scopeId}>${ssrInterpolate(artwork.artist.user.username)}</p>`);
            } else {
              return [
                createVNode("img", {
                  src: artwork.image_url,
                  alt: artwork.title
                }, null, 8, ["src", "alt"]),
                createVNode("p", null, toDisplayString(artwork.artist.user.username), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="text-card p-1 text-center"><h5 class="text-xl font-bold tracking-tight text-gray-900">${ssrInterpolate(artwork.title)}</h5><p class="font-normal text-gray-700">${ssrInterpolate(artwork.description)}</p></div></article>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArtworksGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ArtworksGrid-B8_ZiUFJ.mjs.map
