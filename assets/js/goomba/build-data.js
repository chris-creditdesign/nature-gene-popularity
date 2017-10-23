import chromosomesInOrder from "../helpers/chromosomes-in-order";

function buildData() {
	this.dataByChromosome = chromosomesInOrder(this.data);
	this.inOrder = this.dataByChromosome.map( d => d.name );

	return this;
}

export default buildData;