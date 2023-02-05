import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Divider } from '../../components/Divider';
import { SearchWord } from '../../components/SearchWord';
import { WordComponent } from '../../components/Word';
import { WordDefinition } from '../../components/WordDefinition';
import { WordExtraInfo } from '../../components/WordExtraInfo';
import { api } from '../../lib/axios';

interface WordDefinitionProps {
	word: string;
	phonetic: string;
	phonetics: {
		audio: string;
		text: string;
	}[];
	meanings: {
		partOfSpeech: string;
		definitions: {
			definition: string;
			synonyms: string[];
			antonyms: string[];
			example?: string;
		}[];
	}[];
	origin: string;
}

interface Response {
	data: WordDefinitionProps[];
}

export const WordDefinitionPage = () => {
	const [wordDefinition, setWordDefinition] = useState(
		{} as WordDefinitionProps,
	);

	// Make request to get word definition
	const handleSearchWord = async () => {
		const response: Response = await api.get('/src/utils/apiReturn.json');
		const definition = response.data;
		setWordDefinition(definition[0]);
	};

	useEffect(() => {
		handleSearchWord();
	}, []);

	return (
		<>
			<SearchWord />
			{wordDefinition && (
				<WordComponent
					word={wordDefinition.word}
					audio={wordDefinition.phonetics}
				/>
			)}

			<Flex px={['16']} mb={['28']}>
				<WordDefinition meanings={wordDefinition.meanings} />

				{wordDefinition.origin && (
					<Box flex={'1'}>
						{/* <WordExtraInfo title='Phrases' data='Some random prhase' /> */}
						{/* <Divider /> */}
						<WordExtraInfo title='Origin' data={wordDefinition.origin} />
					</Box>
				)}
			</Flex>
		</>
	);
};
