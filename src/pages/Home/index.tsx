import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SearchWord } from '../../components/SearchWord';

// Sentence animation
const sentence = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1,
			staggerChildren: 0.2,
		},
	},
};

// Letter animation
const letter = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export const Home = () => {
	// Word to be shown on the animation
	const wordTitle = 'Search';

	return (
		<Box>
			<Flex
				as={motion.div}
				initial='hidden'
				animate='visible'
				variants={sentence}
				align={['center']}
				justify={['center']}
			>
				{wordTitle.split('').map((char, index) => (
					<Text
						as={motion.h1}
						fontSize={['96']}
						mt={['10']}
						key={`${char} - ${index}`}
						variants={letter}
					>
						{char}
					</Text>
				))}
			</Flex>
			<SearchWord />
		</Box>
	);
};
