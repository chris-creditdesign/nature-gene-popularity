import d3 from "../d3-bundle";

function buildChart() {
	this.svg = d3.select(this.target)
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

	// Group to hold all the groups that will hold the genes
	this.gChromosomes = this.svg.append("g")
		.attr("class", "g-chromosomes")
		.attr("clip-path", "url(#clip)")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	// Group to hold all the rects
	this.gMainText = this.svg.append("g")
		.attr("class", "g-main-text")
		.attr("clip-path", "url(#clip)")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	// Group to hold the x axis 
	this.gXAxis = this.svg.append("g")
			.attr("class", "x axis")
			.attr("transform", `translate(${this.margin.left}, ${this.height + this.margin.top})`);

	// Group to hold the y axis
	this.gYAxis = this.svg.append("g")
			.attr("class", "y axis")
			.attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

	// Group to hold the zoom rect
	this.gZoom = this.svg.append("g")
		.attr("class", "g-zoom")
		.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

	this.zoomRect = this.gZoom.append("rect")
		.attr("opacity", 0)
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", this.width)
		.attr("height", this.height);
	
	return this;
}

export default buildChart;