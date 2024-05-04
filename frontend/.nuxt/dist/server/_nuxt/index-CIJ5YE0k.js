import { _ as __nuxt_component_0 } from "./nuxt-link-DmFmIQVc.js";
import { ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { b as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./fetch-8GViaUKS.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
async function useListArtists() {
  const runtimeConfig = useRuntimeConfig();
  const { data, error, pending } = await useFetch(runtimeConfig.public.baseUrl + "artists/", {
    lazy: false
  }, "$isVYM44Cdp");
  return { data, error, pending };
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const artists = ref({
      first_name: "",
      last_name: "",
      avatar: "",
      user: {
        username: "",
        fist_name: "",
        last_name: ""
      }
    });
    const fetching = ref(false);
    const { data, error, loading } = ([__temp, __restore] = withAsyncContext(() => useListArtists()), __temp = await __temp, __restore(), __temp);
    if (loading) {
      fetching.value = true;
    }
    if (data) {
      artists.value = data.value;
      fetching.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(artists), (artist) => {
        _push(`<article class="card">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "flex flex-col items-center justify-stretch",
          href: "/artists/" + artist.id + "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", artist.user.avatar)}${ssrRenderAttr("alt", artist.user.first_name)} class="rounded-xl my-4"${_scopeId}><p${_scopeId}>${ssrInterpolate(artist.user.username)}</p><div class="text-card p-1 text-center"${_scopeId}><h5 class="text-xl font-bold tracking-tight text-gray-900"${_scopeId}><span${_scopeId}>${ssrInterpolate(artist.user.first_name)}</span><span${_scopeId}> </span><span${_scopeId}>${ssrInterpolate(artist.user.last_name)}</span></h5></div>`);
            } else {
              return [
                createVNode("img", {
                  src: artist.user.avatar,
                  alt: artist.user.first_name,
                  class: "rounded-xl my-4"
                }, null, 8, ["src", "alt"]),
                createVNode("p", null, toDisplayString(artist.user.username), 1),
                createVNode("div", { class: "text-card p-1 text-center" }, [
                  createVNode("h5", { class: "text-xl font-bold tracking-tight text-gray-900" }, [
                    createVNode("span", null, toDisplayString(artist.user.first_name), 1),
                    createVNode("span", null, " "),
                    createVNode("span", null, toDisplayString(artist.user.last_name), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CIJ5YE0k.js.map
