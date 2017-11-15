import sumCitations from "../helpers/sum-citations";
import chromosomesInOrder from "../helpers/chromosomes-in-order";

let centromeres = [	{name: "chr1", centromere: 125000000},
				{name: "chr2", centromere: 93300000},
				{name: "chr3", centromere: 91000000},
				{name: "chr4", centromere: 50400000},
				{name: "chr5", centromere: 48400000},
				{name: "chr6", centromere: 61000000},
				{name: "chr7", centromere: 59900000},
				{name: "chr8", centromere: 45600000},
				{name: "chr9", centromere: 49000000},
				{name: "chr10", centromere: 40200000},
				{name: "chr11", centromere: 53700000},
				{name: "chr12", centromere: 35800000},
				{name: "chr13", centromere: 17900000},
				{name: "chr14", centromere: 17600000},
				{name: "chr15", centromere: 19000000},
				{name: "chr16", centromere: 36600000},
				{name: "chr17", centromere: 24000000},
				{name: "chr18", centromere: 17200000},
				{name: "chr19", centromere: 26500000},
				{name: "chr20", centromere: 27500000},
				{name: "chr21", centromere: 13200000},
				{name: "chr22", centromere: 14700000},
				{name: "chrX", centromere: 60600000},
				{name: "chrY", centromere: 12500000}];

function buildData() {

	let summedData = sumCitations(this.data);

	this.dataByChromosome = chromosomesInOrder(summedData);
	this.inOrder = this.dataByChromosome.map( d => d.name ).reverse();

	centromeres.forEach(centromere => {
		let centromereName = centromere.name;
		this.dataByChromosome.find( function (elem) { return elem.name === centromereName;}).centromere = centromere.centromere;
	});

	return this;
}

export default buildData;