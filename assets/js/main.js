import d3 from "./d3-bundle";
import myGoomba from "./goomba-bundle";

d3.tsv('./data/sorted_genes_by_popularity.tsv', function(error, data) {
	if (error) {
		console.log('error:', error);
	} else {

		var goombaPlot = new myGoomba({
			target: "#goomba-chart",
			data: data,
			height: 400,
			width: 630
		});

		goombaPlot.init();

	}
});
