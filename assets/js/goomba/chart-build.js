import d3 from "../d3-bundle";

function buildChart() {
	// this.canvas = d3.select(this.target)
	// 	.append("canvas")
	// 	.attr("width", this.width)
	// 	.attr("height", this.height);

	// this.context = this.canvas.node().getContext("2d");

	this.svg = d3.select(this.target)
		// .style('height', `${this.height}px`) // Only explicitally set the height when positioning canvas ovre svg
		.append("svg")
		.attr('width', this.width + this.margin.left + this.margin.right)
		.attr('height', this.height + this.margin.top + this.margin.bottom)
		.style("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)");

	var clip = this.svg.append("defs").append("svg:clipPath")
						.attr("id", "clip")
					  .append("svg:rect")
						.attr("x", 0)
						.attr("y", 0)
						.attr("width", this.width)
						.attr("height", this.height);

	// Group to hold all the rects
	this.gChromosomes = this.svg.append('g')
		.attr("class", "g-chromosomes")
		.attr("clip-path", "url(#clip)")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	// Group to hold all the rects
	this.gChromosomeSelector = this.svg.append('g')
		.attr("class", "g-chromosome-selector")
		.attr("clip-path", "url(#clip)")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	this.gSelectors = this.gChromosomeSelector.append("g");

	// Group to hold all the rects
	this.gMainText = this.svg.append('g')
		.attr("class", "g-main-text")
		.attr("clip-path", "url(#clip)")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	// Rect just just for registering the zoom event
	// this.pane = this.svg.insert("rect")
	// 	.attr("class", "pane")
	// 	.attr("width", this.width)
	// 	.attr("height", this.height)
	// 	.attr("opacity", 0)
	// 	.attr('pointer-events', 'all');

	// Group to hold the x axis 
	this.gXAxis = this.svg.append('g')
			.attr("class", "x axis")
			.attr("transform", `translate(${this.margin.left}, ${this.height})`);

	// Group to hold the y axis
	this.gYAxis = this.svg.append('g')
			.attr("class", "y axis")
			.attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
	
	return this;
}

export default buildChart;