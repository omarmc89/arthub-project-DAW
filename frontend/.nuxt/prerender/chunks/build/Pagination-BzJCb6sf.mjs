import __nuxt_component_2 from './Button-Ch2UgfmZ.mjs';
import { defineComponent, toRef, computed, useSSRContext, mergeProps } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { u as useUI } from './tooltip-BFZnfYSQ.mjs';
import { m as mergeConfig, g as appConfig, _ as _export_sfc } from './server.mjs';
import { b as button } from './button-DK1nGquD.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
import './Link-BHtV3Xy5.mjs';
import './nuxt-link-DmFmIQVc.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ufo/dist/index.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/ohash/dist/index.mjs';
import './link-WrO2rrG0.mjs';
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
import './Icon-CzmPTvOf.mjs';
import './Icon-oe6GKycP.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@iconify/vue/dist/iconify.mjs';
import './index-DmJTZe-0.mjs';
import './useButtonGroup-CFFBsGJV.mjs';

const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main = defineComponent({
  components: {
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    activeButton: {
      type: Object,
      default: () => config.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    divider: {
      type: String,
      default: "\u2026"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i) => i + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r;
      const r2 = current + r;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r2 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i = 1; i <= totalPages; i++) {
          items.push(i);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped)
        items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r + 2 - totalPages;
        for (let i = current - r - addedItems; i <= current - r - 1; i++) {
          items.push(i);
        }
      }
      for (let i = Math.max(2, r1); i <= Math.min(totalPages, r2); i++) {
        items.push(i);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r - 2);
        for (let i = current + r + 1; i <= current + r + addedItems; i++) {
          items.push(i);
        }
      }
      if (afterWrapped)
        items.push(props.divider);
      if (r2 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", { onClick: _ctx.onClickFirst }, () => {
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", { onClick: _ctx.onClickPrev }, () => {
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", { onClick: _ctx.onClickNext }, () => {
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", { onClick: _ctx.onClickLast }, () => {
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Pagination as default };
//# sourceMappingURL=Pagination-BzJCb6sf.mjs.map
