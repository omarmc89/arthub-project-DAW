import { q as defineNuxtRouteMiddleware, s as storeToRefs, d as navigateTo } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { u as useAuthStore } from "./auth-DtbxY98P.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@vue/devtools-api";
import "@vueuse/core";
import "tailwind-merge";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "vue/server-renderer";
import "./fetch-8GViaUKS.js";
const auth = defineNuxtRouteMiddleware((to, _from) => {
  const { userLogged } = storeToRefs(useAuthStore());
  let token = null;
  if (!userLogged.value && !token) {
    return navigateTo("/login");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-BnpVbKRV.js.map
