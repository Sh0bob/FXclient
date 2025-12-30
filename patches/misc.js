import { definePatch, insert } from "../modUtils.js"

export default definePatch(({ insertCode, modifyCode }) => {

  // Hide propaganda popup
  insertCode(`/* here */
    a = b.c + 60 * 1000;
    (new ea()).show(eS.eb, eS.colors, eS.id);
    eS = null;
    return true;`, `if (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive()) return;`)
  modifyCode(`if (!a.b.c(0)) {
			d = e.f + 1000 * 1;
			return;
		} ${insert(`if (!__fx.settings.hidePropagandaPopup && !__fx.customLobby.isActive())`)} a.g.h(5);`)

})