import d3 from "../../d3-bundle";
import collisionDetection from "../../helpers/collision-detection";

function showHideText() {
	this.gMainText.selectAll("g").each(function () {
		let thisGroup = d3.select(this)
			.selectAll("text")
			.attr("class", d => {
				// Only show labels for counts over 1000
				return parseInt(d.count, 10) > 0 ? null : "hide-svg-text";
			});



		thisGroup._groups[0].forEach(collisionDetection);

	});

	return this;
}

export default showHideText;
