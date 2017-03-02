import Goomba from "./goomba/goomba";
import buildChart from "./goomba/chart-build";
import buildScales from "./goomba/scales/scales-build";
import buildAxis from "./goomba/axis/axis-build";
import updateAxis from "./goomba/axis/axis-update";

import buildKey from "./goomba/ui/key-build";
import buildChromosomeSelector from "./goomba/ui/chromosome-selector-build";

import buildChromosomes from "./goomba/svg/chromosome-build";
import buildGenes from "./goomba/svg/gene-build";
import buildSvgChromosomeSelector from "./goomba/svg/chromosome-selector-build";

import buildTextGroup from "./goomba/text/text-group-build";
import buildText from "./goomba/text/text-build";
import showHideText from "./goomba/text/text-showhide";

import buildZoom from "./goomba/zoom/zoom";
import updateAll from "./goomba/update-all";
import init from "./goomba/init";

Goomba.prototype.buildChart = buildChart;
Goomba.prototype.buildScales = buildScales;
Goomba.prototype.buildAxis = buildAxis;
Goomba.prototype.updateAxis = updateAxis;

Goomba.prototype.buildKey = buildKey;
Goomba.prototype.buildChromosomes = buildChromosomes;

Goomba.prototype.buildChromosomeSelector = buildChromosomeSelector;
Goomba.prototype.buildGenes = buildGenes;
Goomba.prototype.buildSvgChromosomeSelector = buildSvgChromosomeSelector;

Goomba.prototype.buildTextGroup = buildTextGroup;
Goomba.prototype.buildText = buildText;
Goomba.prototype.showHideText = showHideText;

Goomba.prototype.buildZoom = buildZoom;
Goomba.prototype.updateAll = updateAll;
Goomba.prototype.init = init;

export default Goomba;