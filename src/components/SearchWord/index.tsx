import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchWord = () => {
	const [word, setWord] = useState('');

	const navigate = useNavigate();

	const handleSearchWord = (e: FormEvent) => {
		e.preventDefault();

		if (word !== '') {
			navigate(`/word/${word}`);
		}
	};

	return (
		<FormControl
			as={'form'}
			maxW={['90%', '80%', '60%', '40%']}
			marginX='auto'
			marginY={'12'}
			position='relative'
			onSubmit={handleSearchWord}
			autoComplete='off'
		>
			<Flex position={'relative'}>
				<Input
					placeholder='Search word'
					onChange={e => setWord(e.target.value)}
					required
					borderRightRadius='0'
				/>
				<Button
					width={['20%']}
					maxW={'24'}
					right='0'
					bg='transparent'
					border={'1px'}
					borderLeft='none'
					borderLeftRadius='0'
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
