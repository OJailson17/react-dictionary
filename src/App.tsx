import { Box, Flex, Text } from '@chakra-ui/react';
import { Header } from './components/Header';
import { SearchWord } from './components/SearchWord';
import { WordComponent } from './components/Word';
import { WordDefinition } from './components/WordDefinition';

export function App() {
	return (
		<>
			<Header />
			<SearchWord />
			<WordComponent />

			<Flex px={['16']}>
				<WordDefinition />

				<Box flex={'1'}>
					<Box m={['4']}>
						<Text>Phrases</Text>

						<Flex>
							<Text>Watch this space</Text>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</>
	);
}
