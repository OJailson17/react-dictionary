import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { WordDefinitionPage } from './pages/WordPage';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/word/:word' element={<WordDefinitionPage />} />
			</Route>
		</Routes>
	);
};
