import d3 from "../../d3-bundle";

function buildScales() {
	let yScaleDomain = [d3.max(this.data.map((d) => { return +d.geneEnd; })),0];
	//	Fix the domain for the print graphic
	let countDomain = [0,700];

	this.xScale = d3.scaleBand()
		.domain(this.inOrder)
		.range([0, this.width])
		.paddingInner(0.25)
		.paddingOuter(0)
		.round(true);

	this.yScale = d3.scaleLinear()
		.domain(yScaleDomain)
		.range([0, this.height]);

	this.geneScale = d3.scaleLinear()
		.domain(countDomain)
		.range([0, this.xScale.bandwidth()]);

	return this;
}

export default buildScales;