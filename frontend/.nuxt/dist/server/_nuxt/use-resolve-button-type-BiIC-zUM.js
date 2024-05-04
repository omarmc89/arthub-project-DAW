import { ref, onMounted, watchEffect } from "vue";
import { o } from "./keyboard-StezvEZ1.js";
function r(t, e) {
  if (t)
    return t;
  let n = e != null ? e : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function s(t, e) {
  let n = ref(r(t.value.type, t.value.as));
  return onMounted(() => {
    n.value = r(t.value.type, t.value.as);
  }), watchEffect(() => {
    var u;
    n.value || o(e) && o(e) instanceof HTMLButtonElement && !((u = o(e)) != null && u.hasAttribute("type")) && (n.value = "button");
  }), n;
}
export {
  s
};
//# sourceMappingURL=use-resolve-button-type-BiIC-zUM.js.map
