import { Box, Text } from '@chakra-ui/react';

export const Header = () => {
	return (
		<Box
			paddingY={['6']}
			paddingX={['16']}
			// bg={'#272727'}
			textAlign='center'
			fontWeight={'bold'}
		>
			<Text>JO Dictionary</Text>
		</Box>
	);
};
