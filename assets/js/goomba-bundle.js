import Goomba from "./goomba/goomba";
import buildChart from "./goomba/chart-build";
import buildScales from "./goomba/scales/scales-build";
import buildAxis from "./goomba/axis/axis-build";
import updateAxis from "./goomba/axis/axis-update";

import buildChromosomes from "./goomba/svg/chromosome-build";
import buildGenes from "./goomba/svg/gene-build";
import buildCentromeres from "./goomba/svg/centromere-build";

import buildText from "./goomba/text/text-build";

import buildSlider from "./goomba/build-slider";

import updateAll from "./goomba/update-all";
import buildData from "./goomba/build-data";
import init from "./goomba/init";

Goomba.prototype.buildChart = buildChart;
Goomba.prototype.buildScales = buildScales;
Goomba.prototype.buildAxis = buildAxis;
Goomba.prototype.updateAxis = updateAxis;

Goomba.prototype.buildChromosomes = buildChromosomes;
Goomba.prototype.buildGenes = buildGenes;
Goomba.prototype.buildCentromeres = buildCentromeres;

Goomba.prototype.buildText = buildText;

Goomba.prototype.buildSlider = buildSlider;

Goomba.prototype.updateAll = updateAll;
Goomba.prototype.buildData = buildData;
Goomba.prototype.init = init;

export default Goomba;