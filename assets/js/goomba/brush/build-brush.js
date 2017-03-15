import d3 from "../../d3-bundle";

function buildBrush() {
	var that = this;

	function brushed() {
		if (d3.event.sourceEvent && d3.event.sourceEvent.type == "zoom") return; // ignore if brush-by-zoom

		var s = d3.event.selection || that.xScale.range();
		
		if (!d3.event.selection) {
			that.gBrush.select(".brush").call(that.brush.move, s);
		}	// Expand brush if just click and no drag

		that.xt.domain([that.xScale.invert(s[0]), that.xScale.invert(s[1])]);

		that.zoomRect.call(that.zoom).call(that.zoom.transform, d3.zoomIdentity
				.scale(that.width / (s[1] - s[0]))
				.translate(-s[0], 0)
			);

		that.updateAll();
	}

	this.brush = d3.brushX()
		.extent([[0,0], [this.width, this.brushHeight]])
		.handleSize(16)
		.on("brush end", brushed);

	this.gBrush.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", this.width)
		.attr("height", this.brushHeight)
		.attr("fill", "#ccc");

	this.gBrush.append("g")
		.attr("class", "brush")
		.call(this.brush)
		.call(this.brush.move, this.xScale.range()); // Sets the initial state of the brush to cover the rect
		
	return this
}

export default buildBrush;