import { mergeProps, useSSRContext } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-around mt-12 h-32 bg-zinc-900 bg-opacity-40 text-zinc-900" }, _attrs))} data-v-de7bae84><article class="first-element flex flex-col items-center justify-center" data-v-de7bae84> 2024 </article><article class="second-element flex flex-col items-center justify-center" data-v-de7bae84><p data-v-de7bae84><span class="rounded-l-xl drop-shadow-lg text-slate-900" data-v-de7bae84>Omar </span><span class="rounded-r-xl drop-shadow-lg text-slate-900" data-v-de7bae84>Martin</span></p><span data-v-de7bae84>DAW final project</span></article><article class="third-element flex flex-col items-center justify-center" data-v-de7bae84><a href="https://github.com/omarmc89/arthub-project-DAW" target="_blank" class="i-carbon-logo-github w-12 h-12" data-v-de7bae84></a></article></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-de7bae84"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=AppFooter-C9ECVXRM.mjs.map
