import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useWord } from '../../../../context/wordContext';
import { Divider } from '../../../../components/Divider';

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
	origin?: string;
}

export const WordDefinition = ({
	meanings = [],
	origin,
}: WordDefinitionProps) => {
	const { onSearchWord } = useWord();

	const { word } = useParams();

	// Sort meanings array in desc order
	const rightOrderMeanings = meanings.sort(
		(a, b) => b.definitions.length - a.definitions.length,
	);

	useEffect(() => {
		onSearchWord(word || '');
	}, [word]);

	return (
		<Box flex={'1'} borderColor={'#363535'}>
			<Grid
				templateRows={['1fr 1fr']}
				templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
				columnGap={'12'}
				paddingY={['5']}
			>
				{rightOrderMeanings?.map((meaning, i) => (
					<GridItem
						h={'min-content'}
						key={`${meaning.definitions} - ${i}`}
						rowSpan={2}
						colSpan={!origin ? 1 : 2}
					>
						<Text color={'#c4c4c4'}>{meaning.partOfSpeech}</Text>

						{meaning.definitions.map((def, i) => (
							<Box key={`${def.definition} - ${i}`}>
								<Text fontSize={['20', '24']} mt={['4']}>
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
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};
