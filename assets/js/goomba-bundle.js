import Goomba from "./goomba/goomba";
import buildChart from "./goomba/chart-build";
import buildScales from "./goomba/scales/scales-build";
import buildAxis from "./goomba/axis/axis-build";

import buildChromosomes from "./goomba/svg/chromosome-build";
import buildGenes from "./goomba/svg/gene-build";

import buildData from "./goomba/build-data";
import init from "./goomba/init";

Goomba.prototype.buildChart = buildChart;
Goomba.prototype.buildScales = buildScales;
Goomba.prototype.buildAxis = buildAxis;

Goomba.prototype.buildChromosomes = buildChromosomes;

Goomba.prototype.buildGenes = buildGenes;

Goomba.prototype.buildData = buildData;
Goomba.prototype.init = init;

export default Goomba;