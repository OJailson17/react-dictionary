import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWord } from '../../context/wordContext';

interface SearchWordProps {
	isHomePage?: boolean;
}

export const SearchWord = ({ isHomePage = false }: SearchWordProps) => {
	const [word, setWord] = useState('');

	const { onSearchWord } = useWord();

	const navigate = useNavigate();

	const handleSearchWord = (e: FormEvent) => {
		e.preventDefault();

		if (isHomePage) {
			navigate(`/word/${word}`);
		} else {
			onSearchWord(word);
		}
	};

	return (
		<FormControl
			as={'form'}
			maxW={['40%']}
			marginX='auto'
			marginY={'12'}
			position='relative'
			onSubmit={handleSearchWord}
		>
			<Flex position={'relative'}>
				<Input
					placeholder='Search word'
					paddingRight={'20%'}
					onChange={e => setWord(e.target.value)}
				/>
				<Button
					width={['20%']}
					maxW={'24'}
					position={'absolute'}
					right='0'
					bg='transparent'
					border={['1px']}
					_hover={{
						background: '#272727',
					}}
					type='submit'
				>
					<MagnifyingGlass size={24} />
				</Button>
			</Flex>
		</FormControl>
	);
};
