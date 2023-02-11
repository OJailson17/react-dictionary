import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<Box
			paddingY={['6']}
			paddingX={['16']}
			textAlign='center'
			fontWeight={'bold'}
			fontSize={['20']}
		>
			<Link to={'/'}>
				<Text>JO Dictionary</Text>
			</Link>
		</Box>
	);
};
