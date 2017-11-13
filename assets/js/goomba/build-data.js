import sumCitations from "../helpers/sum-citations";
import chromosomesInOrder from "../helpers/chromosomes-in-order";

function buildData() {
	let summedData = sumCitations(this.data);

	this.dataByChromosome = chromosomesInOrder(summedData);
	this.inOrder = this.dataByChromosome.map( d => d.name );

	return this;
}

export default buildData;