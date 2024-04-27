import { ref, unref, useSSRContext } from "vue";
import { u as useToast } from "./useToast-Di3LiZSd.js";
import { _ as _export_sfc, s as storeToRefs, c as useRouter } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useAuthStore } from "./auth-DtbxY98P.js";
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
import "tailwind-merge";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./fetch-8GViaUKS.js";
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
export {
  index as default
};
//# sourceMappingURL=index-BPwNFAdZ.js.map
