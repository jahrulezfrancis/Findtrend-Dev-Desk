import { useState } from "react";
import { Box, Heading, VStack, Stack, Switch, Text, Divider, HStack, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";


function PricingTemp() {
    return (
        <Box bgColor='#FAFAFA' minH='40em' w='21em' margin='2em' borderRadius='1em'>
            <VStack>
                <Heading>Personal</Heading>
                <Text>Special first packet for all</Text>
                <Divider />
                <HStack>
                    <Heading>$8/</Heading>
                    <Text pt='1em' fontSize='1em'>Month</Text>
                </HStack>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={BsCheckCircle} color='black.500' outline='fill' />
                        Up to 5 page each group
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsCheckCircle} color='black.500' outline='fill' />
                        Up to 10 group page
                    </ListItem>
                    <ListItem>
                        <ListIcon as={BsCheckCircle} color='black.500' outline='fill' />
                        5 Days group page saved
                    </ListItem>
                </List>
                <Button>Start free trial</Button>
            </VStack>
        </Box>
    )
}

export function PricingList() {
    const [selected, setselected] = useState(true);
    return (
        <Box bgColor='#000000'>
            <VStack>
                <Heading color='white'>Get Your Best Deals</Heading>
                <Stack align='center' direction='row'>
                    <Text color={selected ? 'white' : 'ash'} _active={{ color: 'white' }}>Monthly</Text>
                    <Switch size='lg' onChange={() => { selected === true ? setselected(false) : setselected(true) }} />
                    <Text color={selected ? 'ash' : 'white'}>Yearly</Text>
                </Stack>
            </VStack>
            <PricingTemp />
        </Box>
    )
}
