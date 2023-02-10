import { Flex, Text } from '@chakra-ui/react';
import { Puff } from 'react-loading-icons';

export const LoadingScreen = () => {
	return (
		<Flex
			w={'100%'}
			h={'100vh'}
			position='fixed'
			top={'50%'}
			transform={'translateY(-50%)'}
			bg='transparent'
			alignItems={'center'}
			justify='center'
		>
			<Puff />
		</Flex>
	);
};
