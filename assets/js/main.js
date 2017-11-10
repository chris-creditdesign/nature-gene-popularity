import d3 from "./d3-bundle";
import myGoomba from "./goomba-bundle";

d3.csv('./data/merged_yearsDf.csv', function(error, data) {
	if (error) {
		console.log('error:', error);
	} else {

		const goombaPlot = new myGoomba({
			target: "#goomba-chart",
			data: data,
			height: 1080,
			width: 1920
		});

		goombaPlot.init();

	}
});
