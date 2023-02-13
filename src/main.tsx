import ReactDOM from 'react-dom/client';
import { App } from './App';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</QueryClientProvider>,
);
