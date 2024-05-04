import __nuxt_component_2 from './Button-Ch2UgfmZ.mjs';
import __nuxt_component_1 from './Skeleton-Cddcb8OQ.mjs';
import { _ as _export_sfc, a as useRoute, s as storeToRefs } from './server.mjs';
import { u as useToast } from './useToast-Di3LiZSd.mjs';
import { ref, watch, unref, withCtx, createTextVNode, useSSRContext } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './auth-DtbxY98P.mjs';
import './Link-BHtV3Xy5.mjs';
import './nuxt-link-DmFmIQVc.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ufo/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ohash/dist/index.mjs';
import './link-WrO2rrG0.mjs';
import './Icon-CzmPTvOf.mjs';
import './Icon-oe6GKycP.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/iconify.mjs';
import './index-DmJTZe-0.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import './tooltip-BFZnfYSQ.mjs';
import './useButtonGroup-CFFBsGJV.mjs';
import './button-DK1nGquD.mjs';
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
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/cookie-es/dist/index.mjs';
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
    useRoute();
    useToast();
    storeToRefs(useAuthStore());
    const pendingFetch = ref(false);
    const avatar_image = ref("");
    const inputBlocked = ref(true);
    const artist = ref({
      nickname: ""
    });
    const user = ref({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      avatar: ""
    });
    ref({});
    const skeletonOff = ref(false);
    ref({});
    watch(user.value, () => {
      checkAvatar();
      console.log("Avatar changed");
    });
    function checkAvatar() {
      if (user.value.avatar.includes("http")) {
        avatar_image.value = user.value.avatar;
      } else {
        avatar_image.value = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png";
      }
    }
    function inputBlockedToggle() {
      inputBlocked.value = !inputBlocked.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_USkeleton = __nuxt_component_1;
      _push(`<!--[--><section class="flex flex-row gap-8 mb-12" data-v-595ccc27>`);
      _push(ssrRenderComponent(_component_UButton, {
        class: { "btn-clicked": !unref(inputBlocked), "btn": unref(inputBlocked) },
        onClick: inputBlockedToggle
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Edit profile`);
          } else {
            return [
              createTextVNode("Edit profile")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "btn",
        onClick: inputBlockedToggle
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Change password`);
          } else {
            return [
              createTextVNode("Change password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="main-container flex flex-row" data-v-595ccc27><article class="image-container" data-v-595ccc27>`);
      if (unref(skeletonOff)) {
        _push(`<img${ssrRenderAttr("src", unref(avatar_image))}${ssrRenderAttr("alt", unref(user).avatar)} data-v-595ccc27>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(skeletonOff)) {
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-[350px] w-[350px]" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article><article class="form-container flex flex-col justify-center items-center" data-v-595ccc27><form class="artwork-form space-y-4 text-slate-900" data-v-595ccc27><div data-v-595ccc27><div class="form-label text-center text-center" data-v-595ccc27><label for="first_name" data-v-595ccc27>First Name</label><input${ssrRenderAttr("value", unref(user).first_name)} class="${ssrRenderClass([{ "input-blocked": unref(inputBlocked) }, "form-control rounded-full bg-white"])}"${ssrIncludeBooleanAttr(unref(inputBlocked)) ? " readonly" : ""} id="first_name" name="first_name" type="text" data-v-595ccc27></div><div class="form-label text-center" data-v-595ccc27><label for="last_name" data-v-595ccc27>Last Name</label><input${ssrRenderAttr("value", unref(user).last_name)} class="${ssrRenderClass([{ "input-blocked": unref(inputBlocked) }, "form-control rounded-full bg-white"])}"${ssrIncludeBooleanAttr(unref(inputBlocked)) ? " readonly" : ""} id="last_name" name="last_name" type="text" data-v-595ccc27></div><div class="form-label text-center" data-v-595ccc27><label for="username" data-v-595ccc27>Username</label><input${ssrRenderAttr("value", unref(user).username)} class="${ssrRenderClass([{ "input-blocked": unref(inputBlocked) }, "form-control rounded-full bg-white"])}"${ssrIncludeBooleanAttr(unref(inputBlocked)) ? " readonly" : ""} id="username" name="username" type="text" data-v-595ccc27></div><div class="form-label text-center" data-v-595ccc27><label for="avatar" data-v-595ccc27>Image URL</label><input${ssrRenderAttr("value", unref(user).avatar)} class="${ssrRenderClass([{ "input-blocked": unref(inputBlocked) }, "form-control rounded-full bg-white"])}"${ssrIncludeBooleanAttr(unref(inputBlocked)) ? " readonly" : ""} id="avatar" name="avatar" type="text" data-v-595ccc27></div><div class="form-label text-center" data-v-595ccc27><label for="nickname" data-v-595ccc27>Nickname</label><input${ssrRenderAttr("value", unref(artist).nickname)} class="${ssrRenderClass([{ "input-blocked": unref(inputBlocked) }, "form-control rounded-full bg-white"])}"${ssrIncludeBooleanAttr(unref(inputBlocked)) ? " readonly" : ""} id="nickname" name="nickname" type="text" data-v-595ccc27></div><div class="form-label text-center" data-v-595ccc27><label for="email" data-v-595ccc27>email</label><input${ssrRenderAttr("value", unref(user).email)} class="${ssrRenderClass([{ "input-blocked": unref(inputBlocked) }, "form-control rounded-full bg-white"])}"${ssrIncludeBooleanAttr(unref(inputBlocked)) ? " readonly" : ""} id="email" name="email" type="email" data-v-595ccc27></div></div><button type="submit"${ssrIncludeBooleanAttr(unref(pendingFetch)) ? " disabled" : ""} class="btn btn-primary" data-v-595ccc27>`);
      if (unref(pendingFetch)) {
        _push(`<span data-v-595ccc27>Updating...</span>`);
      } else {
        _push(`<span data-v-595ccc27>Update</span>`);
      }
      _push(`</button></form></article></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-595ccc27"]]);

export { index as default };
//# sourceMappingURL=index-BfgYRNLq.mjs.map
