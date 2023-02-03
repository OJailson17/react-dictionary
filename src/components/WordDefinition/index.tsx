import { Box, Flex, Text } from '@chakra-ui/react';

export const WordDefinition = () => {
	return (
		<Box flex={'1'} borderRight={'2px'} borderColor={'#363535'}>
			<Box padding={['5']}>
				<Text color={'#c4c4c4'}>Noun</Text>

				<Box>
					<Text fontSize={['24']} mt={['4']}>
						1. a continuous area or expanse which is free, available or
						unoccupied.
					</Text>

					<Text mt={['4']} color={'#a2a2a2c6'}>
						"some random frase as en exemple"
					</Text>

					<Flex mt={['4']} wrap='wrap'>
						<Text mr={['6']}>synonyms:</Text>

						{[...Array(4)].map(el => (
							<Text color={'blue.500'} mx={'1'}>
								A lot of texts,
							</Text>
						))}
					</Flex>

					<Flex mt={['4']} wrap='wrap'>
						<Text mr={['6']}>antonyms:</Text>

						{[...Array(4)].map(el => (
							<Text color={'blue.500'} mx={'1'}>
								A lot of texts,
							</Text>
						))}
					</Flex>
				</Box>
				<Box w={['80%']} h={['2px']} bg={'#363535'} my={['6']} mx='auto' />
				<Box>
					<Text fontSize={['24']} mt={['4']}>
						- a continuous area or expanse which is free, available or
						unoccupied.
					</Text>

					<Text mt={['4']} color={'#a2a2a2c6'}>
						"some random frase as en exemple"
					</Text>

					<Flex mt={['4']} wrap='wrap'>
						<Text mr={['6']}>synonyms:</Text>

						{[...Array(4)].map(el => (
							<Text color={'blue.500'} mx={'1'}>
								A lot of texts,
							</Text>
						))}
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};
