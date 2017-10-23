import d3 from "../../d3-bundle";

function buildZoom() {
	var that = this;

	function zoomed() {
		var	t = d3.event.transform;
		that.xt.domain(t.rescaleX(that.xScale).domain());

		that.updateAll();
	}

	this.zoom = d3.zoom()
		.on("zoom", zoomed);
	
	this.zoom.scaleExtent([1, this.data.length / 10])
		.translateExtent([[0, 0], [(this.width), (this.height)]]);

	this.zoomRect.call(this.zoom);

	return this;
}

export default buildZoom;