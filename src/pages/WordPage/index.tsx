import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { LoadingScreen } from '../../components/Loading';
import { SearchWord } from '../../components/SearchWord';
import { WordComponent } from '../../components/Word';
import { WordDefinition } from '../../components/WordDefinition';
import { WordExtraInfo } from '../../components/WordExtraInfo';
import { useWord } from '../../context/wordContext';

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
	const { word } = useParams();

	const location = useLocation();

	const { wordDefinition, onSearchWord, isFetching } = useWord();

	useEffect(() => {
		onSearchWord(word || '');
	}, [location.pathname]);

	// If the word definition is loading show loading screen
	if (!wordDefinition.meanings || isFetching) return <LoadingScreen />;

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
				<WordDefinition
					meanings={wordDefinition.meanings}
					origin={wordDefinition.origin}
				/>

				{wordDefinition.origin && (
					<Box flex={'1'}>
						<WordExtraInfo title='Origin' data={wordDefinition.origin} />
					</Box>
				)}
			</Flex>
		</>
	);
};
