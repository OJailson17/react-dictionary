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
	let firstArrayOrder = meanings.map(def => def);
	let arrayLengths = [];

	for (let el of firstArrayOrder) {
		arrayLengths.push(el.definitions.length);
	}

	const rightSort = arrayLengths.sort();

	for (let index of rightSort) {
		const findArrayDefinitions = firstArrayOrder.find(
			definition => definition.definitions.length === index,
		);

		if (findArrayDefinitions) {
			rightArrayOrder.push(findArrayDefinitions);
		}

		console.log('Not found');
	}

	return rightArrayOrder;
};
