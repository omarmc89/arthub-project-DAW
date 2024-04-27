import { ref, unref, useSSRContext } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { u as useToast } from './useToast-Di3LiZSd.mjs';
import { _ as _export_sfc, s as storeToRefs, c as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './auth-DtbxY98P.mjs';
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
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
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
import './fetch-8GViaUKS.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    storeToRefs(useAuthStore());
    const user = ref({
      email: "",
      password: ""
    });
    const loginError = ref(false);
    useToast();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-e33d105f><form class="form space-y-4 mt-2 text-slate-900 flex flex-col items-center justify-center" data-v-e33d105f>`);
      if (unref(loginError)) {
        _push(`<h2 class="text-xl text-red-800 rounded-xl p-2 mt-2 bg-red-200" data-v-e33d105f> Invalid Credentials</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loginError)) {
        _push(`<h2 class="text-xl rounded-xl p-2 bg-transparent text-transparent" data-v-e33d105f>Login</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="flex flex-col items-center gap-4" data-v-e33d105f><div class="form-label flex flex-col items-center" data-v-e33d105f><label for="username" data-v-e33d105f>Username</label><input${ssrRenderAttr("value", unref(user).email)} type="text" placeholder="Email" required class="form-control rounded-full bg-white" data-v-e33d105f></div><div class="form-label flex flex-col items-center mb-6" data-v-e33d105f><label for="email" data-v-e33d105f>Email</label><input${ssrRenderAttr("value", unref(user).password)} type="password" placeholder="Password" required class="form-control rounded-full bg-white" data-v-e33d105f></div></section><button type="submit"${ssrIncludeBooleanAttr(_ctx.pendingFetch) ? " disabled" : ""} class="btn" data-v-e33d105f>`);
      if (_ctx.pendingFetch) {
        _push(`<span data-v-e33d105f>Submitting...</span>`);
      } else {
        _push(`<span data-v-e33d105f>Login</span>`);
      }
      _push(`</button></form></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e33d105f"]]);

export { index as default };
//# sourceMappingURL=index-BPwNFAdZ.mjs.map
