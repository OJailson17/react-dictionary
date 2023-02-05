import { Box, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Divider } from '../Divider';

interface WordDefinitionProps {
	meanings?: {
		partOfSpeech: string;
		definitions: {
			definition: string;
			synonyms: string[];
			antonyms: string[];
			example?: string;
		}[];
	}[];
}

export const WordDefinition = ({ meanings }: WordDefinitionProps) => {
	console.log({ meanings });

	return (
		<Box flex={'1'} borderColor={'#363535'}>
			<Grid
				// h={['100%']}
				// bg='red'
				templateRows={['1fr 1fr']}
				templateColumns={['repeat(2, 1fr)']}
				// gridRow={'1fr 1fr'}
				// columns={[2]}
				columnGap={'12'}
				// rowGap='2'
				padding={['5']}
				// justifyContent='center'
				// alignItems={'center'}
			>
				{meanings?.map((meaning, i) => (
					<GridItem
						h={'min-content'}
						key={`${meaning.definitions} - ${i}`}
						// bg='green'
						rowSpan={2}
						colSpan={i + 1}
					>
						<Text color={'#c4c4c4'}>{meaning.partOfSpeech}</Text>

						{meaning.definitions.map((def, i) => (
							<Box key={`${def.definition} - ${i}`}>
								<Text fontSize={['24']} mt={['4']}>
									{def.definition}
								</Text>

								{def.example && (
									<Text mt={['4']} color={'#a2a2a2c6'}>
										{def.example}
									</Text>
								)}

								{def.synonyms.length > 0 && (
									<Flex mt={['4']} wrap='wrap'>
										<Text mr={['6']}>synonyms:</Text>

										{def.synonyms.map((el, i) => (
											<Text color={'blue.500'} mx={'1'} key={`${el} - ${i}`}>
												{el},
											</Text>
										))}
									</Flex>
								)}

								{def.antonyms.length > 0 && (
									<Flex mt={['4']} wrap='wrap'>
										<Text mr={['6']}>antonyms:</Text>

										{def.antonyms.map((el, i) => (
											<Text color={'blue.500'} mx={'1'} key={`${el} - ${i}`}>
												{el},
											</Text>
										))}
									</Flex>
								)}

								<Divider />
							</Box>
						))}

						{/* <Divider /> */}
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};