import { defineComponent } from 'file:///Users/omarmartin/Documents/DAW/arthub-project-DAW/frontendV3/node_modules/vue/index.mjs';
import { A } from './keyboard-StezvEZ1.mjs';

var s = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d, { slots: o, attrs: i }) {
  return () => {
    var t;
    let { features: e, ...r } = d, n = { "aria-hidden": (e & 2) === 2 ? true : (t = r["aria-hidden"]) != null ? t : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: n, theirProps: r, slot: {}, attrs: i, slots: o, name: "Hidden" });
  };
} });

export { f, s };
//# sourceMappingURL=hidden-BCOMh9xa.mjs.map
