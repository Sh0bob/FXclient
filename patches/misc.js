import { definePatch, insert } from "../modUtils.js"
import { styleText } from "node:util";

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

  // for the custom lobby version
  try {
    modifyCode(`new a("⚔️<br>" + __L(), function() {
      ${insert(`if (__fx.isCustomLobbyVersion) alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/")
      else`)} b(0);
		}, ${insert(`__fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : `)} c.d)`)
  } catch (error) {
    console.warn(styleText("yellow", `Warning: failed to apply patches specific to the custom lobby version`))
  }
})