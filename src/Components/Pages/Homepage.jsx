import { Box } from '@chakra-ui/react';
import React from 'react';
import IntroSection from '../Header/Introsection';
import { PricingList } from '../Sections/Body';
import { AfterTabSection, TabSection } from '../Sections/FrontPage';

export default function Homepage() {
    return (
        <Box>
            <IntroSection />
            <TabSection />
            <AfterTabSection />
            <PricingList />
        </Box>
    )
}