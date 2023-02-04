import { Box, Flex } from '@chakra-ui/react';
import { Divider } from '../../components/Divider';
import { SearchWord } from '../../components/SearchWord';
import { WordComponent } from '../../components/Word';
import { WordDefinition } from '../../components/WordDefinition';
import { WordExtraInfo } from '../../components/WordExtraInfo';

export const WordDefinitionPage = () => {
	return (
		<>
			<SearchWord />
			<WordComponent />

			<Flex px={['16']} mb={['28']}>
				<WordDefinition />

				<Box flex={'1'}>
					<WordExtraInfo title='Phrases' data='Some random prhase' />
					<Divider />
					<WordExtraInfo title='Origin' data='The origin of the word' />
				</Box>
			</Flex>
		</>
	);
};
