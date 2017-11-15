import d3 from "../../d3-bundle";

function buildGenes() {

    var that = this;

    this.gChromosomes.selectAll("g").each(function(data) {

        function findXPosition(d) {
            let midPoint = (d.geneEnd - d.geneStart) / 2;
            return that.yScale(midPoint + d.geneStart);
        }

        let myGenes = d3.select(this)
            .selectAll("line")
            .data(data.genes);

        // Enter
        myGenes.enter()
            .append("line")
            .attr("y1", d => findXPosition(d))
            .attr("x1", d => {
                return 0;
            })
            .attr("y2", d => findXPosition(d))
            .attr("x2", d => {
                return that.geneScale(d[that.year + "-sum"]);
            })
            .attr("stroke-width", 3)
            .attr("stroke", d => {
                if (d.geneSymbol === "TP53") {
                    return "#ff0000";
                } else {
                    return "rgba(255,255,0,1)";
                }
            });

        // Update
        myGenes.attr("x2", d => {
            return that.geneScale(d[that.year + "-sum"]);
        });

        myGenes.exit()
            .remove();


    });

    return this;
}

export default buildGenes;