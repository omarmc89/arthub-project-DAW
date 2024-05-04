import { ref, onMounted, watchEffect } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { o as o$1 } from './keyboard-StezvEZ1.mjs';

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
    n.value || o$1(e) && o$1(e) instanceof HTMLButtonElement && !((u = o$1(e)) != null && u.hasAttribute("type")) && (n.value = "button");
  }), n;
}

export { s };
//# sourceMappingURL=use-resolve-button-type-BiIC-zUM.mjs.map
