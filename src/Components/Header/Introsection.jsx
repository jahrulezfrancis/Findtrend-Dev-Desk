import { Box } from '@chakra-ui/react';
import React from 'react';
import Navigation from './Navigation';
import { WelcomeBox } from './Navigation';

export default function IntroSection() {
    return(
        <Box bgColor='#000000' minH='56em'>
            <Navigation />
            <WelcomeBox />
        </Box>
    )
}