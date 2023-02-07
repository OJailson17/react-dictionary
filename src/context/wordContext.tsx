import { useQuery } from '@tanstack/react-query';
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
		refetch,
	} = useQuery({
		queryKey: ['word'],
		queryFn: async () => {
			try {
				const response: Response = await api.get(`/${searchedWord}`);
				setWordDefinition(response.data[0]);
				return response.data[0];
			} catch (err) {
				// alert('Error');
				console.log(error);
			}
		},
		cacheTime: 1000 * 60 * 5, // 5 minutes
		staleTime: 1000 * 60 * 2, // 2 minutes
		enabled: fetchData,
	});

	useEffect(() => {
		if (searchedWord.length > 0 && searchedWord !== '') {
			// setFetchData(true);
			refetch();
		}
	}, [searchedWord]);

	console.log({ isFetching });

	useEffect(() => {
		if (!isFetching && wordMeaning) {
			console.log(wordMeaning);
			// setWordDefinition(wordMeaning);
		}
	}, [isFetching]);

	return (
		<WordContext.Provider
			value={{ searchedWord, onSearchWord: handleSearchWord, wordDefinition }}
		>
			{children}
		</WordContext.Provider>
	);
};

export const useWord = () => useContext(WordContext);
