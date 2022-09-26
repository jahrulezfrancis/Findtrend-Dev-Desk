import { useState } from "react";
import { Box, Heading, VStack, Stack, Switch, Text } from "@chakra-ui/react";


export function PricingList() {
    const [selected, setselected] = useState(false);
    return (
        <Box bgColor='#000000'>
            <VStack>
                <Heading color='white'>Get Your Best Deals</Heading>
                <Stack align='center' direction='row'>
                    <Text color={selected ? 'white' : 'green'} _active={{color: 'white'}}>Monthly</Text>
                    <Switch size='lg' onChange={() => { selected === false ? setselected('true') : setselected(false)}} />
                    <Text color='white'>Yearly</Text>
                </Stack>
            </VStack>
        </Box>
    )
}