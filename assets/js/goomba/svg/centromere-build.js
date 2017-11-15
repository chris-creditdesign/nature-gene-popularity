import d3 from "../../d3-bundle";

function buildCentromeres() {

    var that = this;

    this.gChromosomes.selectAll("g").each(function(data) {

        d3.select(this)
            .append("path")
            .attr("d", `m ${that.xScale.bandwidth() - 10} ${that.yScale(data.centromere)} l 10 10 l 0 -20 z`)
            .attr("stroke", "none")
            .attr("fill", "#000000");

        d3.select(this)
            .append("path")
            .attr("d", `m 0 ${that.yScale(data.centromere) - 10} l 10 10 l -10 10 z`)
            .attr("stroke", "none")
            .attr("fill", "#000000");

    });

    return this;
}

export default buildCentromeres;