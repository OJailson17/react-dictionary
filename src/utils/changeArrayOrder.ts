interface changeArrayOrderProps {
	meanings: {
		partOfSpeech: string;
		definitions: {
			definition: string;
			synonyms: string[];
			antonyms: string[];
			example?: string;
		}[];
	}[];
}

// Sort meaning in ascending order according to definition length array
export const changeArrayOrder = ({ meanings }: changeArrayOrderProps) => {
	let rightArrayOrder = [];
	//  Set the array of meanings on this variable
	let firstArrayOrder = meanings.map(def => def);
	let arrayLengths = [];

	// Get the length of each array and add on arrayLength variable
	for (let el of firstArrayOrder) {
		arrayLengths.push(el.definitions.length);
	}

	// Sort the length numbers in asc order
	const rightSort = arrayLengths.sort();

	for (let i = 0; i < firstArrayOrder.length; i++) {
		// loop through the firstArray variable and find the element that has the definitions array with the same length order as indicated on the rightSortArray

		const findRightOrder = firstArrayOrder.find(def => {
			return (
				def.definitions.length === rightSort[i] &&
				JSON.stringify(def.definitions) ===
					JSON.stringify(firstArrayOrder[i].definitions)
			);
		});

		if (findRightOrder) {
			rightArrayOrder.push(findRightOrder);
		} else {
			console.log('Not found');
		}
	}

	/* 
	Output: [
		{
			...,
			definitions: [].length = 1
		}
		{
			...,
			definitions: [].length = 2
		}
		{
			...,
			definitions: [].length = 3
		}
	]
	*/
	return rightArrayOrder;
};
