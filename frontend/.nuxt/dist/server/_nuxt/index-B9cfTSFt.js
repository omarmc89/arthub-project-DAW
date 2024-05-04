import { _ as __nuxt_component_0 } from "./ArtworksGrid-B8_ZiUFJ.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-DmFmIQVc.js";
import "ufo";
import "hookable";
import "./fetch-8GViaUKS.js";
import "ohash";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ArtworksGrid = __nuxt_component_0;
  _push(`<!--[--><h1>Artworks</h1>`);
  _push(ssrRenderComponent(_component_ArtworksGrid, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/listartworks/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-B9cfTSFt.js.map
