import { Box, Flex, Text } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { Divider } from './components/Divider';
import { Header } from './components/Header';
import { SearchWord } from './components/SearchWord';
import { WordComponent } from './components/Word';
import { WordDefinition } from './components/WordDefinition';
import { WordExtraInfo } from './components/WordExtraInfo';
import { WordContextProvider } from './context/wordContext';
import { Router } from './Router';

export function App() {
	return (
		<BrowserRouter>
			<WordContextProvider>
				<Router />
			</WordContextProvider>
		</BrowserRouter>
	);
}
