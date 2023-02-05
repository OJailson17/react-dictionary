import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { PlayCircle } from 'phosphor-react';
import { useState } from 'react';

interface WordComponentProps {
	word: string;
	audio: {
		audio: string;
		text: string;
	}[];
}

export const WordComponent = ({ audio, word }: WordComponentProps) => {
	// const [phoneticText, setPhoneticText] = useState('');

	// Play audio of the link
	function playAudio() {
		var wordAudio = new Audio(audio[0].audio || '');
		wordAudio.play();
	}

	// Find the first audio element that contains a text property
	const phoneticText = audio?.find(pho => pho.text)?.text;

	return (
		<Flex
			as='section'
			h={['56']}
			px={['16']}
			align='center'
			justify={['space-between']}
			// bg='green'
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
	);
};
