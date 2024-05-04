import __nuxt_component_1 from "./Skeleton-Cddcb8OQ.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_USkeleton = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full items-center justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_USkeleton, { class: "h-12 w-full mb-12" }, null, _parent));
  _push(`<article class="flex flex-row items-center justify-center gap-32">`);
  _push(ssrRenderComponent(_component_USkeleton, { class: "h-[600px] w-[500px] m-4" }, null, _parent));
  _push(`<div class="flex flex-col items-center justify-center gap-32">`);
  _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-44" }, null, _parent));
  _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-44" }, null, _parent));
  _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-44" }, null, _parent));
  _push(`</div></article></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArtworkShowSkeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ArtworkShowSkeleton-BI2epk6-.js.map
