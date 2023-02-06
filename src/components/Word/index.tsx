import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { PlayCircle } from 'phosphor-react';
import { useState } from 'react';
import { useWord } from '../../context/wordContext';

interface WordComponentProps {
	word: string;
	audio: {
		audio: string;
		text: string;
	}[];
}

export const WordComponent = ({ audio, word }: WordComponentProps) => {
	// Find the first audio element that contains a audio property
	const audioPronunciation = audio?.find(pronounce => pronounce.audio)?.audio;

	// Play audio of the link
	function playAudio() {
		var wordAudio = new Audio(audioPronunciation);
		wordAudio.play();
	}

	// Find the first audio element that contains a text property
	const phoneticText = audio?.find(pho => pho.text)?.text;

	// console.log({ audioPronunciation });

	return (
		<Box>
			<Flex
				as='section'
				h={['56']}
				px={['16']}
				align='center'
				justify={['space-between']}
				borderBottom='2px'
				borderColor={'#363535'}
			>
				<Text fontSize={['96']}>{word}</Text>

				<Button
					w={['56']}
					border={'1px'}
					borderRadius={'full'}
					bg='transparent'
					display={['flex']}
					gap={['3']}
					_hover={{ background: 'transparent' }}
					onClick={playAudio}
				>
					<PlayCircle size={24} weight='fill' />

					<Text fontWeight={'normal'} fontSize={['sm']}>
						{phoneticText}
					</Text>
				</Button>
			</Flex>
			{/* {synonyms.length > 0 && (
				<Flex mt={['4']} wrap='wrap'>
					<Text mr={['6']}>synonyms:</Text>

					{synonyms.map((el, i) => (
						<Text color={'blue.500'} mx={'1'} key={`${el} - ${i}`}>
							{el},
						</Text>
					))}
				</Flex>
			)}

			{antonyms.length > 0 && (
				<Flex mt={['4']} wrap='wrap'>
					<Text mr={['6']}>antonyms:</Text>

					{antonyms.map((el, i) => (
						<Text color={'blue.500'} mx={'1'} key={`${el} - ${i}`}>
							{el},
						</Text>
					))}
				</Flex>
			)} */}
		</Box>
	);
};
