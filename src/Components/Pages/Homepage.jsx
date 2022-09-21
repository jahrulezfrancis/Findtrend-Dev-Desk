import { Box } from '@chakra-ui/react';
import React from 'react';
import IntroSection from '../Header/Introsection';
import { TabSection } from '../Sections/FrontPage';

export default function Homepage() {
    return (
        <Box>
            <IntroSection />
            <TabSection />
        </Box>
    )
}