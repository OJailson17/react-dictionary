import { Box, Flex, Text } from '@chakra-ui/react';

interface WordExtraInfoProps {
	title: string;
	data: string;
}

export const WordExtraInfo = ({ title, data }: WordExtraInfoProps) => {
	return (
		<Box m={['4']} minH={['36']}>
			<Text color={'#c4c4c4'}>{title}</Text>

			<Flex>
				<Text mt={['4']} color={'#a2a2a2c6'}>
					{data || ''}
				</Text>
			</Flex>
		</Box>
	);
};
