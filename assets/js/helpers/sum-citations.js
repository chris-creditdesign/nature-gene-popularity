import d3 from "../d3-bundle";

function sumCitations(data) {
	let yearRange = d3.range(1980,2017).map(d => d.toString());

	data.forEach( gene => {
		gene.geneStart = parseInt(gene.geneStart, 10);
		gene.geneEnd = parseInt(gene.geneEnd, 10);

		yearRange.forEach( year => {
			let yearSliced = yearRange.slice(0, (yearRange.indexOf(year) + 1));
			let total = 0;

			yearSliced.forEach( slice => {
				total += parseInt(gene[slice], 10);
			});

			gene[year + "-sum"] = total;

		});
	});

	console.log(data[0]);

	return data;

}

export default sumCitations;