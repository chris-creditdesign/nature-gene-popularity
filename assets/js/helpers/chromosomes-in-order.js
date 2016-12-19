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
			.sort( (a,b) => a.start - b.start );

		let lengths = genes.map( e => +e.end );
		
		return {"name": d,
				"genes": genes,
				"length": d3.max(lengths)
				};
		});

	// order them according to the maximum start position
	// of all genes
	let inOrder = chromosomesCollected
		.sort( (a,b) => b.length - a.length );

	return inOrder;
};

export default chromosomesInOrder;