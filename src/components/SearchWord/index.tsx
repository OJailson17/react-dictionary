import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';

export const SearchWord = () => {
	return (
		<FormControl
			maxW={['40%']}
			marginX='auto'
			marginY={'12'}
			position='relative'
		>
			<Flex position={'relative'}>
				<Input placeholder='Search word' paddingRight={'20%'} />
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
				>
					<MagnifyingGlass size={24} />
				</Button>
			</Flex>
		</FormControl>
	);
};
