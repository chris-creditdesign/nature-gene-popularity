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

import buildText from "./goomba/text/text-build";

import buildZoom from "./goomba/zoom/zoom";
import buildBrush from "./goomba/brush/build-brush";
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

Goomba.prototype.buildText = buildText;

Goomba.prototype.buildZoom = buildZoom;
Goomba.prototype.buildBrush = buildBrush;

Goomba.prototype.updateAll = updateAll;
Goomba.prototype.init = init;

export default Goomba;