import { BrowserRouter } from 'react-router-dom';

import { WordContextProvider } from './context/wordContext';
import { Router } from './Router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
	return (
		<BrowserRouter>
			<WordContextProvider>
				<Router />
				<ToastContainer />
			</WordContextProvider>
		</BrowserRouter>
	);
}
