import d3 from "../../d3-bundle";

function buildZoom() {
	var that = this;

	function zoomed() {
		var	t = d3.event.transform;
		that.xt.domain(t.rescaleX(that.xScale).domain());

		that.updateAll();
	}

	function zoomToGene() {
		if (this.name !== "reset") {
			let activeGene = that.data.find( d => d.symbol === this.name)
			that.xt.domain([parseInt(activeGene.start, 10),(parseInt(activeGene.end, 10))]);
		} else {
			that.xt.domain([0, d3.max(that.data.map((d) => { return +d.end; }))]);
		}

		that.updateAll();
	}

	d3.selectAll(".buttons > button")
		.on("click", zoomToGene);

	// console.log(this.data.find((d) => d.symbol === "TP53"));

	this.zoom = d3.zoom()
		.on("zoom", zoomed);
	
	this.zoom.scaleExtent([1, this.data.length / 10])
		.translateExtent([[0, 0], [(this.width), (this.height)]]);

	this.zoomRect.call(this.zoom);

	return this;
}

export default buildZoom;