import __nuxt_component_2 from "./Container-qNANbakm.js";
import __nuxt_component_1 from "./Select-BXRD5uUa.js";
import { u as useToast } from "./useToast-Di3LiZSd.js";
import { _ as _export_sfc, c as useRouter } from "../server.mjs";
import { u as useFetch } from "./fetch-8GViaUKS.js";
import { ref, withCtx, unref, createVNode, withModifiers, withDirectives, isRef, vModelText, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import "tailwind-merge";
import "./tooltip-BFZnfYSQ.js";
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
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./Icon-CzmPTvOf.js";
import "./Icon-oe6GKycP.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-DmJTZe-0.js";
import "./useFormGroup-4DdrZmPB.js";
import "./useButtonGroup-CFFBsGJV.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let username = ref("");
    let first_name = ref("");
    let last_name = ref("");
    let email = ref("");
    let password = ref("");
    let avatar = ref("");
    let nickname = ref("");
    let errorOnFetch = ref("");
    const dataFetch = ref(null);
    const selectedUserType = ref("Artist");
    const toast = useToast();
    const router = useRouter();
    const options = [
      {
        name: "Artist",
        value: "Artist"
      }
      // {
      // name: 'Client',
      // value: 'Client'
      // }
    ];
    const toggleFields = () => {
    };
    const register = async () => {
      const { data, pending, error } = await useFetch("https://arthub-api.fly.dev/api/v1/artists/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // 'Authorization': 'Token f3b557760eda960a094698122c6eb9489c2487f3'
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          first_name: first_name.value,
          last_name: last_name.value,
          password: password.value,
          avatar: avatar.value,
          nickname: nickname.value
        })
      }, "$RRr4dDQ7Ex");
      if (error) {
        errorOnFetch.value = error.value;
      }
      if (data) {
        dataFetch.value = data.value;
        console.log(dataFetch.value);
        toast.add({ title: "Artist created! Redirecting to your Dashboard...", timeout: 2e3, callback: () => router.push("/dashboard") });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_2;
      const _component_USelect = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="form-wrapper flex flex-col items-center justify-center" data-v-3aaef070${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USelect, {
              class: "mb-4",
              onChange: toggleFields,
              color: "violet",
              variant: "outline",
              size: "xl",
              icon: "i-carbon-user",
              modelValue: selectedUserType.value,
              "onUpdate:modelValue": ($event) => selectedUserType.value = $event,
              placeholder: "Select if you want to register an ARTIST or CLIENT",
              padded: true,
              options
            }, null, _parent2, _scopeId));
            _push2(`<form class="form space-y-4 text-slate-900 flex flex-col items-center" data-v-3aaef070${_scopeId}><section class="flex flex-row items-center gap-12" data-v-3aaef070${_scopeId}><article class="form-label h-full my-4 flex flex-col items-start justify-center gap-4" data-v-3aaef070${_scopeId}><div class="form-label" data-v-3aaef070${_scopeId}><label for="username" data-v-3aaef070${_scopeId}>Username</label><input${ssrRenderAttr("value", unref(username))} type="text" placeholder="Username" required class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div><div class="form-label" data-v-3aaef070${_scopeId}><label for="email" data-v-3aaef070${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="Email" required class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div><div class="form-label" data-v-3aaef070${_scopeId}><label for="password" data-v-3aaef070${_scopeId}>Password</label><input type="password"${ssrRenderAttr("value", unref(password))} placeholder="Password" required class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div></article><article class="form-label my-4 flex flex-col items-start gap-4" data-v-3aaef070${_scopeId}><div class="form-label" data-v-3aaef070${_scopeId}><label for="first_name" data-v-3aaef070${_scopeId}>First Name</label><input${ssrRenderAttr("value", unref(first_name))} type="text" placeholder="First Name" required class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div><div class="form-label" data-v-3aaef070${_scopeId}><label for="last_name" data-v-3aaef070${_scopeId}>Last Name</label><input${ssrRenderAttr("value", unref(last_name))} type="text" placeholder="Last Name" required class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div><div class="form-label" data-v-3aaef070${_scopeId}><label for="avatar" data-v-3aaef070${_scopeId}>Avatar Url</label><input${ssrRenderAttr("value", unref(avatar))} type="text" placeholder="Avatar url" class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div></article></section>`);
            if (selectedUserType.value === "Artist") {
              _push2(`<div class="form-label" data-v-3aaef070${_scopeId}><label for="nickname" data-v-3aaef070${_scopeId}>Nickname:</label><input${ssrRenderAttr("value", unref(nickname))} type="text" id="nickname" name="nickname" placeholder="Nickname" class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (selectedUserType.value === "Client") {
              _push2(`<div class="form-label" data-v-3aaef070${_scopeId}><label for="clientField1" data-v-3aaef070${_scopeId}>Client Field 1:</label><input type="text" id="clientField1" name="clientField1" class="form-control rounded-full bg-white" data-v-3aaef070${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button type="submit"${ssrIncludeBooleanAttr(_ctx.pendingFetch) ? " disabled" : ""} class="btn" data-v-3aaef070${_scopeId}>`);
            if (_ctx.pendingFetch) {
              _push2(`<span data-v-3aaef070${_scopeId}>Submitting...</span>`);
            } else {
              _push2(`<span data-v-3aaef070${_scopeId}>Register</span>`);
            }
            _push2(`</button></form>`);
            if (unref(errorOnFetch)) {
              _push2(`<div class="text-xl text-red uppercase" data-v-3aaef070${_scopeId}>${ssrInterpolate(unref(errorOnFetch).data.error)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.pending) {
              _push2(`<div data-v-3aaef070${_scopeId}>Loading...</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (dataFetch.value) {
              _push2(`<div data-v-3aaef070${_scopeId}>Data: ${ssrInterpolate(dataFetch.value.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "form-wrapper flex flex-col items-center justify-center" }, [
                createVNode(_component_USelect, {
                  class: "mb-4",
                  onChange: toggleFields,
                  color: "violet",
                  variant: "outline",
                  size: "xl",
                  icon: "i-carbon-user",
                  modelValue: selectedUserType.value,
                  "onUpdate:modelValue": ($event) => selectedUserType.value = $event,
                  placeholder: "Select if you want to register an ARTIST or CLIENT",
                  padded: true,
                  options
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("form", {
                  class: "form space-y-4 text-slate-900 flex flex-col items-center",
                  onSubmit: withModifiers(register, ["prevent"])
                }, [
                  createVNode("section", { class: "flex flex-row items-center gap-12" }, [
                    createVNode("article", { class: "form-label h-full my-4 flex flex-col items-start justify-center gap-4" }, [
                      createVNode("div", { class: "form-label" }, [
                        createVNode("label", { for: "username" }, "Username"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : username = $event,
                          type: "text",
                          placeholder: "Username",
                          required: "",
                          class: "form-control rounded-full bg-white"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(username)]
                        ])
                      ]),
                      createVNode("div", { class: "form-label" }, [
                        createVNode("label", { for: "email" }, "Email"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
                          type: "email",
                          placeholder: "Email",
                          required: "",
                          class: "form-control rounded-full bg-white"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(email)]
                        ])
                      ]),
                      createVNode("div", { class: "form-label" }, [
                        createVNode("label", { for: "password" }, "Password"),
                        withDirectives(createVNode("input", {
                          type: "password",
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
                          placeholder: "Password",
                          required: "",
                          class: "form-control rounded-full bg-white"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(password)]
                        ])
                      ])
                    ]),
                    createVNode("article", { class: "form-label my-4 flex flex-col items-start gap-4" }, [
                      createVNode("div", { class: "form-label" }, [
                        createVNode("label", { for: "first_name" }, "First Name"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(first_name) ? first_name.value = $event : first_name = $event,
                          type: "text",
                          placeholder: "First Name",
                          required: "",
                          class: "form-control rounded-full bg-white"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(first_name)]
                        ])
                      ]),
                      createVNode("div", { class: "form-label" }, [
                        createVNode("label", { for: "last_name" }, "Last Name"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(last_name) ? last_name.value = $event : last_name = $event,
                          type: "text",
                          placeholder: "Last Name",
                          required: "",
                          class: "form-control rounded-full bg-white"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(last_name)]
                        ])
                      ]),
                      createVNode("div", { class: "form-label" }, [
                        createVNode("label", { for: "avatar" }, "Avatar Url"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(avatar) ? avatar.value = $event : avatar = $event,
                          type: "text",
                          placeholder: "Avatar url",
                          class: "form-control rounded-full bg-white"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(avatar)]
                        ])
                      ])
                    ])
                  ]),
                  selectedUserType.value === "Artist" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "form-label"
                  }, [
                    createVNode("label", { for: "nickname" }, "Nickname:"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => isRef(nickname) ? nickname.value = $event : nickname = $event,
                      type: "text",
                      id: "nickname",
                      name: "nickname",
                      placeholder: "Nickname",
                      class: "form-control rounded-full bg-white"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(nickname)]
                    ])
                  ])) : createCommentVNode("", true),
                  selectedUserType.value === "Client" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "form-label"
                  }, [
                    createVNode("label", { for: "clientField1" }, "Client Field 1:"),
                    createVNode("input", {
                      type: "text",
                      id: "clientField1",
                      name: "clientField1",
                      class: "form-control rounded-full bg-white"
                    })
                  ])) : createCommentVNode("", true),
                  createVNode("button", {
                    type: "submit",
                    disabled: _ctx.pendingFetch,
                    class: "btn"
                  }, [
                    _ctx.pendingFetch ? (openBlock(), createBlock("span", { key: 0 }, "Submitting...")) : (openBlock(), createBlock("span", { key: 1 }, "Register"))
                  ], 8, ["disabled"])
                ], 32),
                unref(errorOnFetch) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-xl text-red uppercase"
                }, toDisplayString(unref(errorOnFetch).data.error), 1)) : createCommentVNode("", true),
                _ctx.pending ? (openBlock(), createBlock("div", { key: 1 }, "Loading...")) : createCommentVNode("", true),
                dataFetch.value ? (openBlock(), createBlock("div", { key: 2 }, "Data: " + toDisplayString(dataFetch.value.value), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3aaef070"]]);
export {
  index as default
};
//# sourceMappingURL=index-C58o39NU.js.map
