import Goomba from "./goomba/goomba";
import buildChart from "./goomba/goomba-chart-build";
import buildScales from "./goomba/goomba-scales-build";
import buildKey from "./goomba/goomba-key-build";
import buildAxis from "./goomba/goomba-axis-build";
import updateAxis from "./goomba/goomba-axis-update";
import buildSVG from "./goomba/goomba-svg-build";
import updateSVG from "./goomba/goomba-svg-update";
import buildText from "./goomba/goomba-text-build";
import updateText from "./goomba/goomba-text-update";
import showHideText from "./goomba/goomba-text-showhide";
import buildZoom from "./goomba/goomba-zoom";
import updateAll from "./goomba/goomba-update-all";

Goomba.prototype.buildChart = buildChart;
Goomba.prototype.buildScales = buildScales;
Goomba.prototype.buildKey = buildKey;
Goomba.prototype.buildAxis = buildAxis;
Goomba.prototype.updateAxis = updateAxis;
Goomba.prototype.buildSVG = buildSVG;
Goomba.prototype.updateSVG = updateSVG;
Goomba.prototype.buildText = buildText;
Goomba.prototype.updateText = updateText;
Goomba.prototype.showHideText = showHideText;
Goomba.prototype.buildZoom = buildZoom;
Goomba.prototype.updateAll = updateAll;

export default Goomba;