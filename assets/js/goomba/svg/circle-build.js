import d3 from "../../d3-bundle";

function buildCircles() {

    var that = this;

    this.gChromosomes.selectAll("g").each(function(data) {

        d3.select(this)
            .append("circle")
            .attr("cx", (that.xScale.bandwidth() / 2))
            .attr("cy", that.yScale(data.length))
            .attr("r", (that.xScale.bandwidth() / 2))
            .attr("stroke", "none")
            .attr("fill", "#333");

        d3.select(this)
            .append("circle")
            .attr("cx", (that.xScale.bandwidth() / 2))
            .attr("cy", that.yScale(0))
            .attr("r", (that.xScale.bandwidth() / 2))
            .attr("stroke", "none")
            .attr("fill", "#333");

    });

    return this;
}

export default buildCircles;