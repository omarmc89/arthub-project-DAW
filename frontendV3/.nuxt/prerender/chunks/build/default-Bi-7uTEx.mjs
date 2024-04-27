import { _ as __nuxt_component_0$1 } from './nuxt-link-DmFmIQVc.mjs';
import { _ as _export_sfc, c as useRouter, s as storeToRefs, a as useRoute, i as useNuxtApp } from './server.mjs';
import { defineComponent, h, useSSRContext, withCtx, renderSlot, ref, mergeProps, unref, createTextVNode, computed } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './auth-DtbxY98P.mjs';
import __nuxt_component_2 from './Container-qNANbakm.mjs';
import __nuxt_component_3 from './Notifications-BDZI3SUf.mjs';
import { _ as __nuxt_component_4 } from './AppFooter-C9ECVXRM.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ufo/dist/index.mjs';
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
import './tooltip-BFZnfYSQ.mjs';
import './Notification-B9d_BVZ4.mjs';
import './Icon-CzmPTvOf.mjs';
import './Icon-oe6GKycP.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/iconify.mjs';
import './index-DmJTZe-0.mjs';
import './Avatar-B1BLJCRM.mjs';
import './Button-Ch2UgfmZ.mjs';
import './Link-BHtV3Xy5.mjs';
import './link-WrO2rrG0.mjs';
import './useButtonGroup-CFFBsGJV.mjs';
import './button-DK1nGquD.mjs';
import './useToast-Di3LiZSd.mjs';

const _sfc_main$1 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { logout } = useAuthStore();
    const { authenticated } = storeToRefs(useAuthStore());
    const { userLogged } = storeToRefs(useAuthStore());
    const route = useRoute();
    ref(route.path);
    ref(false);
    const userLogout = () => {
      logout();
      router.push("/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-between w-full px-4 z-10 mt-2" }, _attrs))} data-v-8825d742><section class="flex flex-col w-full h-auto" data-v-8825d742><article class="flex justify-end w-full" data-v-8825d742><ul class="flex flex-row gap-x-4 items-center justify-end" data-v-8825d742>`);
      if (!unref(authenticated)) {
        _push(`<li class="app-link-top p-1 hover:bg-green-300 hover:rounded-lg" data-v-8825d742>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/register" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Register`);
            } else {
              return [
                createTextVNode("Register")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(authenticated)) {
        _push(`<li class="app-link-top p-1 hover:bg-green-300 hover:rounded-lg" data-v-8825d742>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Login`);
            } else {
              return [
                createTextVNode("Login")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authenticated)) {
        _push(`<li class="app-link-top p-1 hover:bg-sky-300 hover:rounded-lg" data-v-8825d742>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Profile`);
            } else {
              return [
                createTextVNode("Profile")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authenticated)) {
        _push(`<li class="app-link-top p-1 hover:bg-sky-300 hover:rounded-lg hover:cursor-pointer" data-v-8825d742>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          type: "button",
          onClick: userLogout
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></article><article class="flex text-slate-900 items-center justify-center w-full h-auto py-8" data-v-8825d742><a class="no-underline" href="#" data-v-8825d742><p class="title flex flex-row gap-0 items-center text-center text-2xl py-2" data-v-8825d742><span class="letter hover:-translate-y-2 hover:scale-125 hover:text-purple-400 hover:lowercase" data-v-8825d742>A</span><span class="letter hover:-translate-y-2 hover:scale-125 hover:text-pink-400 hover:lowercase" data-v-8825d742>r</span><span class="letter hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:lowercase" data-v-8825d742>t</span><span class="letter hover:-translate-y-2 hover:scale-125 hover:text-shark-400 hover:lowercase" data-v-8825d742>H</span><span class="letter hover:-translate-y-2 hover:scale-125 hover:text-cyan-400 hover:lowercase" data-v-8825d742>U</span><span class="letter hover:-translate-y-2 hover:scale-125 hover:text-orange-400 hover:lowercase" data-v-8825d742>B</span></p></a></article><article class="w-full flex-grow items-center justify-center" id="nav-content" data-v-8825d742><section class="nav-links flex w-full flex-row gap-x-6 items-center justify-around" data-v-8825d742>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        id: "app-link",
        class: "app-link text-center w-full p-1",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "app-link text-center w-full p-1",
        to: "/artworks"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Artworks `);
          } else {
            return [
              createTextVNode(" Artworks ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "app-link text-center w-full p-1",
        to: "/artists"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Artists `);
          } else {
            return [
              createTextVNode(" Artists ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(userLogged)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "app-link text-center w-full p-1",
          to: "/dashboard"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Dashboard `);
            } else {
              return [
                createTextVNode(" Dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section></article></section></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8825d742"]]);
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const start = () => set(0);
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_NuxtLoadingIndicator = __nuxt_component_1;
  const _component_UContainer = __nuxt_component_2;
  const _component_UNotifications = __nuxt_component_3;
  const _component_AppFooter = __nuxt_component_4;
  _push(`<!--[--><header data-v-5230ad74>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`</header><div class="background" data-v-5230ad74></div>`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
  _push(ssrRenderComponent(_component_UContainer, { class: "min-h-screen mt-12 py-0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_UNotifications, null, null, _parent));
  _push(`<footer data-v-5230ad74>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5230ad74"]]);

export { _default as default };
//# sourceMappingURL=default-Bi-7uTEx.mjs.map
