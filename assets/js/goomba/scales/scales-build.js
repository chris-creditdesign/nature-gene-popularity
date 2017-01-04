import d3 from "../../d3-bundle";
import chromosomesInOrder from "../../helpers/chromosomes-in-order";

function buildScales() {
	this.dataByChromosome = chromosomesInOrder(this.data);
	let inOrder = this.dataByChromosome.map( d => d.name );
	let xScaleDomain = [0, d3.max(this.data.map((d) => { return +d.end; }))];
	let colorDomain = d3.extent(this.data.map( d => parseInt(d.count, 10) ));

	this.yScaleExpanded = d3.scaleBand()
		.domain(inOrder)
		.range([0, this.height - this.margin.top - this.margin.bottom])
		.round(true)
		.paddingInner(0.1)
		.paddingOuter(0.5);

	this.yScaleContracted = d3.scaleBand()
		.domain(inOrder)
		.range([0, this.height - this.margin.top - this.margin.bottom])
		.round(true)
		.paddingInner(0.1)
		.paddingOuter(0.5);

	this.xScale = d3.scaleLinear()
		.domain(xScaleDomain)
		.range([0, this.width - this.margin.left - this.margin.right]);

	this.xt = this.xScale;

	// Use a log scale to account for the wide range of numbers
	this.colorScale = d3.scaleLog()
		.domain(colorDomain)
		.range(['#FFFF00', '#FF0000']);
	
	return this;
}

export default buildScales;