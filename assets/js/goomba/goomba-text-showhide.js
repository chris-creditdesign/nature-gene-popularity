import d3 from "../d3-bundle";
import collisionDetection from "../helpers/collision-detection";

function showHideText() {
	this.gText.each(function () {
		let thisGroup = d3.select(this).selectAll("text").attr("class", null);

		thisGroup._groups[0].forEach(collisionDetection);

	});

	return this;
}

export default showHideText;
