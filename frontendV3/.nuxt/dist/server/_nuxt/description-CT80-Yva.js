import { ref, provide, computed, defineComponent, onMounted, onUnmounted, unref, inject } from "vue";
import { I, A } from "./keyboard-StezvEZ1.js";
let u = Symbol("DescriptionContext");
function w() {
  let t = inject(u, null);
  if (t === null)
    throw new Error("Missing parent");
  return t;
}
function k({ slot: t = ref({}), name: o = "Description", props: s = {} } = {}) {
  let e = ref([]);
  function r(n) {
    return e.value.push(n), () => {
      let i = e.value.indexOf(n);
      i !== -1 && e.value.splice(i, 1);
    };
  }
  return provide(u, { register: r, slot: t, name: o, props: s }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t, { attrs: o, slots: s }) {
  var n;
  let e = (n = t.id) != null ? n : `headlessui-description-${I()}`, r = w();
  return onMounted(() => onUnmounted(r.register(e))), () => {
    let { name: i = "Description", slot: l = ref({}), props: d = {} } = r, { ...c } = t, f = { ...Object.entries(d).reduce((a, [g, m]) => Object.assign(a, { [g]: unref(m) }), {}), id: e };
    return A({ ourProps: f, theirProps: c, slot: l.value, attrs: o, slots: s, name: i });
  };
} });
export {
  k
};
//# sourceMappingURL=description-CT80-Yva.js.map
