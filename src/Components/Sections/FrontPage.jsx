import React from 'react';
import { Box, Button, Heading, Stack, VStack, Text } from '@chakra-ui/react';
import { BsFillLightningChargeFill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"

export function TabSection() {
    return (
        <Box bgColor='#A8FF35' minH='40em'>
            <VStack justify='center' align='center' spacing='20' h='100%' w='100%' pt='9em'>
                <Heading lineHeight='2em' fontWeight='900' fontSize='3em' fontFamily='Allerta' color='#000000' textAlign='center'>Open new tab is sh*t</Heading>
                <Box bgColor='#F5F5F5' minH='auto' w='20em' minW='10em'>
                    <Stack align='center' justify='end' p='2em'>
                        <Button _hover='none' bgColor='black' borderRadius='none' h='3.3em'
                            leftIcon={<BsFillLightningChargeFill color='#A8FF35' />}
                            rightIcon={<AiOutlineClose />} color='white'>
                            Findtrend - Elon Musk
                        </Button>
                    </Stack>
                </Box>
                <Stack>
                    <Text lineHeight='1.6em' fontWeight='400' fontSize='1.2em' fontFamily='Effra' color='#000000' textAlign='center'>
                        A solution for your browser tabs and don’t make your device get slower over time. Get <br />
                        ease and faster to discover a trend with just one tab.
                    </Text>
                </Stack>

            </VStack>
        </Box>
    )
}