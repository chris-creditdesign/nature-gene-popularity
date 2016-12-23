import d3 from "../d3-bundle";

function updateText() {

	var that = this;

	this.gText.each(function (data) {

		d3.select(this)
			.selectAll("text")
			.attr("x", d => {
				let start = that.xt(d.start);
				let width = that.xt(d.end) - that.xt(d.start);
				
				return start + (width / 2);
			});

	});

	return this;
}

export default updateText;
