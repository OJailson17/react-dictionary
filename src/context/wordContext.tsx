import { QueryCache, useQuery } from '@tanstack/react-query';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
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
}

const WordContext = createContext({} as WordContextProps);

export const WordContextProvider = ({ children }: WordContextProviderProps) => {
	const [searchedWord, setSearchedWord] = useState('');
	const [wordDefinition, setWordDefinition] = useState(
		{} as WordDefinitionProps,
	);
	const [fetchData, setFetchData] = useState(false);

	const handleSearchWord = async (word: string) => {
		setSearchedWord(word);
	};

	const {
		data: wordMeaning,
		error,
		isFetching,
		isFetched,
	} = useQuery({
		queryKey: ['word'],
		queryFn: async () => {
			const response: Response = await api.get('/src/utils/apiReturn.json');
			return response.data[0];
		},
		cacheTime: 1000 * 60 * 2, // 2 minutes
		enabled: fetchData,
	});

	const STALE_TIME = 1000 * 60 * 5; // 5 minutes

	useEffect(() => {
		if (searchedWord !== '') {
			setFetchData(true);
		}
	}, [searchedWord]);

	console.log({ isFetching });

	useEffect(() => {
		if (!isFetching && wordMeaning) {
			console.log(wordMeaning);
			setWordDefinition(wordMeaning);
		}
	}, [isFetched]);

	// const queryCache = new QueryCache({
	// 	onError: error => {
	// 		console.log(error);
	// 	},
	// 	onSuccess: data => {
	// 		console.log(data);
	// 	},
	// });

	// const query = queryCache.findAll();

	// console.log({ query });

	// const unsubscribe = queryCache.subscribe()

	return (
		<WordContext.Provider
			value={{ searchedWord, onSearchWord: handleSearchWord, wordDefinition }}
		>
			{children}
		</WordContext.Provider>
	);
};

export const useWord = () => useContext(WordContext);
