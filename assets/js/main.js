import d3 from "./d3-bundle";
import Goomba from "./goomba/goomba-zoom";

d3.tsv('./data/sorted_genes_by_popularity.tsv', function(error, data) {
	if (error) {
		console.log('error:', error);
	} else {		
		var goombaPlot = new Goomba({
			target: "#goomba-chart",
			data: data,
			height: 800,
			width: 630
		});

		goombaPlot.buildChart()
			.buildScales()
			.buildAxis()
			.buildGraphic()
			.buildText()
			.showHideText()
			.buildZoom();
	}
});
