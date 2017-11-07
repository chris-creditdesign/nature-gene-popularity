import d3 from "./d3-bundle";
import myGoomba from "./goomba-bundle";

d3.csv('./data/graphic-idea-1.csv', function(error, data) {
	if (error) {
		console.log('error:', error);
	} else {

		const goombaPlot = new myGoomba({
			target: "#goomba-chart",
			data: data,
			height: 1200,
			width: 630
		});

		goombaPlot.init();

	}
});
