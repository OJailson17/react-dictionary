import { Button, Flex, Text } from '@chakra-ui/react';
import { PlayCircle } from 'phosphor-react';

export const WordComponent = () => {
	function playMusic() {
		var music = new Audio(
			'https://api.dictionaryapi.dev/media/pronunciations/en/space-us.mp3',
		);
		music.play();
	}

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
			<Text fontSize={['96']}>Space</Text>

			<Button
				w={['56']}
				border={'1px'}
				borderRadius={'full'}
				bg='transparent'
				display={['flex']}
				gap={['3']}
				_hover={{ background: 'transparent' }}
				onClick={playMusic}
			>
				<PlayCircle size={24} weight='fill' />

				<Text fontWeight={'normal'} fontSize={['sm']}>
					/speɪs/
				</Text>
			</Button>
		</Flex>
	);
};
