import d3 from "../d3-bundle";

function buildZoom() {
	var that = this;

	var zoom = d3.zoom()
		.on("zoom", zoomed);

	zoom.scaleExtent([1, this.data.length / 10])
			.translateExtent([[0, 0], [(this.width), (this.height)]]);

	this.pane.call(zoom);

	function zoomed() {
		
		var	t = d3.event.transform;
		that.xt = t.rescaleX(that.xScale);

		that.updateAll();

	}
}

export default buildZoom;