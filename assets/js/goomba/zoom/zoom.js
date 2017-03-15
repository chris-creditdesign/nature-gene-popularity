import d3 from "../../d3-bundle";

function buildZoom() {
	var that = this;

	function mouseMove() {
		if(!that.expanded) {
			let yPos = d3.mouse(this)[1];
			that.activeChromosome = that.yScaleContracted.invert(yPos);
			that.updateAll();
		}
	}

	function mouseOut() {
		if (!that.expanded) {
			that.activeChromosome = "All";
			that.updateAll();
		}
	}

	function mouseClick() {
		if(!that.expanded) {
			let yPos = d3.mouse(this)[1];
			that.activeChromosome = that.yScaleContracted.invert(yPos);
			that.expanded = true;
			that.chromosomeSelector.property("value", that.activeChromosome);
			that.updateAll();
		}
	}

	function zoomed() {
		if (d3.event.sourceEvent && d3.event.sourceEvent.type == "brush") return; // ignore if zoom-by-brush

		var	t = d3.event.transform;
		that.xt = t.rescaleX(that.xScale);
		var range = that.xt.range().map(t.invertX, t);
		that.gBrush.select(".brush").call(that.brush.move, range);

		that.updateAll();
	}

	this.zoom = d3.zoom()
		.on("zoom", zoomed);

	this.zoom.scaleExtent([1, this.data.length / 10])
			.translateExtent([[0, 0], [(this.width + this.margin.left + this.margin.right), (this.height + this.margin.top + this.margin.bottom)]]);

	this.zoomRect.call(this.zoom)
		.on("mousemove", mouseMove)
		.on("mouseout", mouseOut)
		.on("click", mouseClick);

	return this;
}

export default buildZoom;