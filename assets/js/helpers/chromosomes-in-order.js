import d3 from "../d3-bundle";

var chromosomesInOrder = function (data) {
	// Get the names of the chromosomes
	// Return an array of strings
	// Use .map to get an array of 'chr' strings
	// Use Set to get just the unique values from that array as a Set
	// use .from to turn it back into an array
	let chromosomes = Array.from(new Set(data.map( d => d.chr )));

	/*	Return an array of objects containing a name 
		and an array of the genes in that chromosome and the maximum length*/
	let chromosomesCollected = chromosomes.map( d => {
		let genes = data.filter( e => e.chr == d )
			.sort( (a,b) => a.geneStart - b.geneStart );

		let lengths = genes.map( e => +e.geneEnd );
		
		return {"name": d,
				"genes": genes,
				"length": d3.max(lengths)
				};
		});

	// Put all the genes in name order
	let inOrder = chromosomesCollected
		.sort( (a,b) => parseInt(a.name.substr(3,2), 10) - parseInt(b.name.substr(3,2), 10) );

	// Find the X chromosome and move it to the end
	inOrder.push(inOrder.splice(inOrder.findIndex(d => d.name === "chrX"),1)[0]);
	inOrder.push(inOrder.splice(inOrder.findIndex(d => d.name === "chrY"),1)[0]);

	console.log(`Number of genes: ${data.length}`);

	return inOrder;

};

export default chromosomesInOrder;