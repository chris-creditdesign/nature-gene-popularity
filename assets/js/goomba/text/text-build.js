import d3 from "../../d3-bundle";
import collisionDetection from "../../helpers/collision-detection";

function buildText () {
	var that = this;

	// Find the active chromosome by name in an array of objects
	// This should be contracted into one file
	function isActiveChromosome(elem, index, array) {
		return elem.name === that.activeChromosome;
	}

	let data = this.expanded ? this.dataByChromosome.find(isActiveChromosome).genes : [];

	this.gText = this.gMainText.selectAll("text")
		.data(data);

	// Enter
	this.gText.enter()
		.append("text")
		.attr("x", d => {
			let start = that.xt(d.start);
			let width = that.xt(d.end) - that.xt(d.start);
			
			return start + (width / 2);
		})
		.attr("y", () => {
			return (this.height / 2) - (this.yScaleExpanded.bandwidth() / 2) - 10;
		})
		.attr("text-anchor", "middle")
		.text(d => d.symbol)
		.attr("class", null)
		.each(function (elem, index, array) {
			collisionDetection(this, index, array);
		});


	// Update
	this.gText
		.attr("x", d => {			
			let start = that.xt(d.start);
			let width = that.xt(d.end) - that.xt(d.start);
			
			return start + (width / 2);
		})
		.attr("class", null)
		.each(function (elem, index, array) {
			collisionDetection(this, index, array);
		});

	// Exit 
	this.gText.exit()
		.remove();

	return this;
}

export default buildText;
