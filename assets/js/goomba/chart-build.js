import d3 from "../d3-bundle";

function buildChart() {
	this.svg = d3.select(this.target)
		.append("svg")
		.attr('width', this.width + this.margin.left + this.margin.right)
		.attr('height', this.height + this.margin.top + this.margin.bottom)
		.style("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)");

	// Group to hold all the groups that will hold the genes
	this.gChromosomes = this.svg.append("g")
		.attr("class", "g-chromosomes")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	// Group to hold all the rects
	this.gMainText = this.svg.append("g")
		.attr("class", "g-main-text")
		.attr("clip-path", "url(#clip)")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	// Group to hold the x axis 
	this.gYAxis = this.svg.append("g")
			.attr("class", "y axis")
			.attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

	// Group to hold the y axis
	this.gXAxis = this.svg.append("g")
			.attr("class", "x axis")
			.attr("transform", `translate(${this.margin.left}, ${this.height + this.margin.top})`);
	
	return this;
}

export default buildChart;