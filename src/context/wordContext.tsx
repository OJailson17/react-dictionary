import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../lib/axios';

interface WordContextProviderProps {
	children: ReactNode;
}

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

interface WordContextProps {
	searchedWord: string;
	onSearchWord: (word: string) => void;
	wordDefinition: WordDefinitionProps;
	isFetching: boolean;
}

const WordContext = createContext({} as WordContextProps);

export const WordContextProvider = ({ children }: WordContextProviderProps) => {
	const [searchedWord, setSearchedWord] = useState('');
	const [wordDefinition, setWordDefinition] = useState(
		{} as WordDefinitionProps,
	);

	const navigate = useNavigate();

	// Set word from input search to state
	const handleSearchWord = async (word: string) => {
		setSearchedWord(word);
	};

	const CACHE_TIME_IN_MINUTES = 1000 * 60 * 5; // create a 5 minutes cache
	const STALE_TIME_IN_MINUTES = 1000 * 60 * 2; // keep data stale for 2 minutes

	const { isFetching, refetch } = useQuery({
		queryKey: ['word'],
		queryFn: async () => {
			// Get data from api and save it in the wordDefinition state
			try {
				const response: Response = await api.get(`/${searchedWord}`, {
					timeout: 10000,
				});

				setWordDefinition(response.data[0]);
				return response.data[0];
			} catch (err) {
				// If error is 404 show word not found message if not, show generic message
				if (err instanceof AxiosError) {
					toast(
						err.response?.status === 404
							? 'Word not found'
							: 'Something went wrong!',
						{
							position: 'top-center',
							type: 'error',
							theme: 'dark',
							autoClose: 3000,
						},
					);
					navigate('/');
					console.log(err);
				}
			}
		},
		cacheTime: CACHE_TIME_IN_MINUTES,
		staleTime: STALE_TIME_IN_MINUTES,
		enabled: false, // don't make an api request when the application is loaded
	});

	// If the search input is filled refetch data from api
	useEffect(() => {
		if (searchedWord.length > 0 && searchedWord !== '') {
			refetch();
		}
	}, [searchedWord]);

	return (
		<WordContext.Provider
			value={{
				searchedWord,
				onSearchWord: handleSearchWord,
				wordDefinition,
				isFetching,
			}}
		>
			{children}
		</WordContext.Provider>
	);
};

export const useWord = () => useContext(WordContext);
