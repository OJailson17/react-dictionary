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
				px={['10', '10', '10', '16', '16']}
				align='center'
				justify={['space-between']}
				// direction={['column']}
				borderBottom='2px'
				borderColor={'#363535'}
				// bg='red'
			>
				<Text fontSize={['50', '50', '80', '90', '96']}>{word}</Text>

				<Button
					w={['20', '24', '40', '56', '56']}
					border={'1px'}
					borderRadius={'full'}
					bg='transparent'
					display={['flex']}
					gap={['3']}
					_hover={{ background: 'transparent' }}
					onClick={playAudio}
				>
					<PlayCircle size={24} weight='fill' />

					<Text
						fontWeight={'normal'}
						fontSize={['sm']}
						display={['none', 'flex']}
					>
						{phoneticText}
					</Text>
				</Button>
			</Flex>
		</Box>
	);
};
