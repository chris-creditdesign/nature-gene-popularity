import Goomba from "./goomba/goomba";
import buildChart from "./goomba/goomba-chart-build";
import buildScales from "./goomba/goomba-scales-build";
import buildAxis from "./goomba/goomba-axis-build";
import updateAxis from "./goomba/goomba-axis-update";
import buildGraphic from "./goomba/goomba-graphic-build";
import updateGraphic from "./goomba/goomba-graphic-update";
import buildText from "./goomba/goomba-text-build";
import updateText from "./goomba/goomba-text-update";
import showHideText from "./goomba/goomba-text-showhide";
import buildZoom from "./goomba/goomba-zoom";

Goomba.prototype.buildChart = buildChart;
Goomba.prototype.buildScales = buildScales;
Goomba.prototype.buildAxis = buildAxis;
Goomba.prototype.updateAxis = updateAxis;
Goomba.prototype.buildGraphic = buildGraphic;
Goomba.prototype.updateGraphic = updateGraphic;
Goomba.prototype.buildText = buildText;
Goomba.prototype.updateText = updateText;
Goomba.prototype.showHideText = showHideText;
Goomba.prototype.buildZoom = buildZoom;

export default Goomba;