import __nuxt_component_2 from './Button-Ch2UgfmZ.mjs';
import { defineComponent, toRef, ref, toRefs, computed, useSSRContext, onUnmounted, mergeProps } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { twMerge } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import { m as mergeConfig, g as appConfig, _ as _export_sfc } from './server.mjs';
import { u as useUI } from './tooltip-BFZnfYSQ.mjs';
import { useScroll, useElementSize, useResizeObserver } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/@vueuse/core/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/server-renderer/index.mjs';
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

const carousel = {
  wrapper: "relative",
  container: "relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
  item: "flex flex-none snap-center",
  arrows: {
    wrapper: "flex items-center justify-between"
  },
  indicators: {
    wrapper: "absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",
    base: "rounded-full h-3 w-3",
    active: "bg-primary-500 dark:bg-primary-400",
    inactive: "bg-gray-100 dark:bg-gray-800 mix-blend-overlay"
  },
  default: {
    prevButton: {
      color: "black",
      class: "rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "black",
      class: "rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-right-20-solid "
    }
  }
};
const useCarouselScroll = (el) => {
  const x = ref(0);
  function onMouseDown(e) {
    el.value.style.scrollSnapType = "none";
    el.value.style.scrollBehavior = "auto";
    x.value = e.pageX;
    (void 0).addEventListener("mousemove", onMouseMove);
    (void 0).addEventListener("mouseup", onMouseUp);
  }
  function onMouseUp() {
    el.value.style.removeProperty("scroll-behavior");
    el.value.style.removeProperty("scroll-snap-type");
    (void 0).removeEventListener("mousemove", onMouseMove);
    (void 0).removeEventListener("mouseup", onMouseUp);
  }
  function onMouseMove(e) {
    e.preventDefault();
    const delta = e.pageX - x.value;
    x.value = e.pageX;
    el.value.scrollBy(-delta, 0);
  }
  onUnmounted(() => {
    if (!el.value) {
      return;
    }
    el.value.removeEventListener("mousedown", onMouseDown);
  });
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.carousel, carousel);
const _sfc_main = defineComponent({
  components: {
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    arrows: {
      type: Boolean,
      default: false
    },
    indicators: {
      type: Boolean,
      default: false
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  setup(props, { expose }) {
    const { ui, attrs } = useUI("carousel", toRef(props, "ui"), config, toRef(props, "class"));
    const carouselRef = ref();
    const itemWidth = ref(0);
    const { x, arrivedState } = useScroll(carouselRef, { behavior: "smooth" });
    const { width: carouselWidth } = useElementSize(carouselRef);
    const { left: isFirst, right: isLast } = toRefs(arrivedState);
    useCarouselScroll(carouselRef);
    useResizeObserver(carouselRef, (entries) => {
      var _a, _b;
      const [entry] = entries;
      itemWidth.value = ((_b = (_a = entry == null ? void 0 : entry.target) == null ? void 0 : _a.firstElementChild) == null ? void 0 : _b.clientWidth) || 0;
    });
    const currentPage = computed(() => Math.round(x.value / itemWidth.value) + 1);
    const pages = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      return props.items.length - Math.round(carouselWidth.value / itemWidth.value) + 1;
    });
    function onClickNext() {
      x.value += itemWidth.value;
    }
    function onClickPrev() {
      x.value -= itemWidth.value;
    }
    function onClick(page) {
      x.value = (page - 1) * itemWidth.value;
    }
    expose({
      pages,
      page: currentPage,
      prev: onClickPrev,
      next: onClickNext,
      select: onClick
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isFirst,
      isLast,
      carouselRef,
      pages,
      currentPage,
      onClickNext,
      onClickPrev,
      onClick,
      twMerge
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))} data-v-69d830ff><div class="${ssrRenderClass([_ctx.ui.container, "no-scrollbar"])}" data-v-69d830ff><!--[-->`);
  ssrRenderList(_ctx.items, (item, index) => {
    _push(`<div class="${ssrRenderClass(_ctx.ui.item)}"${ssrRenderAttr("role", _ctx.indicators ? "tabpanel" : null)} data-v-69d830ff>`);
    ssrRenderSlot(_ctx.$slots, "default", {
      item,
      index
    }, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.arrows) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.arrows.wrapper)}" data-v-69d830ff>`);
    ssrRenderSlot(_ctx.$slots, "prev", {
      onClick: _ctx.onClickPrev,
      disabled: _ctx.isFirst
    }, () => {
      var _a;
      if (_ctx.prevButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isFirst }, { ..._ctx.ui.default.prevButton, ..._ctx.prevButton }, {
          class: _ctx.twMerge(_ctx.ui.default.prevButton.class, (_a = _ctx.prevButton) == null ? void 0 : _a.class),
          "aria-label": "Prev",
          onClick: _ctx.onClickPrev
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    ssrRenderSlot(_ctx.$slots, "next", {
      onClick: _ctx.onClickNext,
      disabled: _ctx.isLast
    }, () => {
      var _a;
      if (_ctx.nextButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isLast }, { ..._ctx.ui.default.nextButton, ..._ctx.nextButton }, {
          class: _ctx.twMerge(_ctx.ui.default.nextButton.class, (_a = _ctx.nextButton) == null ? void 0 : _a.class),
          "aria-label": "Next",
          onClick: _ctx.onClickNext
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.indicators) {
    _push(`<div role="tablist" class="${ssrRenderClass(_ctx.ui.indicators.wrapper)}" data-v-69d830ff><!--[-->`);
    ssrRenderList(_ctx.pages, (page) => {
      ssrRenderSlot(_ctx.$slots, "indicator", {
        onClick: _ctx.onClick,
        active: page === _ctx.currentPage,
        page
      }, () => {
        _push(`<button type="button" role="tab"${ssrRenderAttr("aria-selected", page === _ctx.currentPage)} class="${ssrRenderClass([
          _ctx.ui.indicators.base,
          page === _ctx.currentPage ? _ctx.ui.indicators.active : _ctx.ui.indicators.inactive
        ])}"${ssrRenderAttr("aria-label", `set slide ${page}`)} data-v-69d830ff></button>`);
      }, _push, _parent);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-69d830ff"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Carousel-r3I67qMX.mjs.map
