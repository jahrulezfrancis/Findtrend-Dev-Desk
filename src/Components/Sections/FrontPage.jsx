import React from 'react';
import { Box, Button, Heading, Stack, VStack, Text, Flex, Image } from '@chakra-ui/react';
import { BsFillLightningChargeFill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import Microsoft from "../Images/microsoft.png"
import Allar from "../Images/Allianz.png"
import Upwork from "../Images/upwork.png"
import Volvo from "../Images/volvo.png"
import Grub from "../Images/grab.png"
import Verizon from "../Images/verizon.png"
import Coinbase from "../Images/coinbase.png"
import Expedia from "../Images/expedia.png"
import Airtable from "../Images/airtable.png"
import Magento from "../Images/magneto.png"
import Carrera from "../Images/carrera.png"
import Bonanza from "../Images/bonanza.png"
import Wetransfer from "../Images/weTransfer.png"
import Suzuki from "../Images/suzuki.png"
import Algolia from "../Images/Algolia.png"
import Heineken from "../Images/Heineken.png"
import Tweet1 from "../Images/tweet1.png"
import Tweet2 from "../Images/tweet2.png"
import Tweet3 from "../Images/tweet3.png"

import Facebook from "../Images/facebook.png"
import Twitter from "../Images/Twitter.png"
import Dribble from "../Images/dribble.png"
import Pinterest from "../Images/Pinterest.png"
import Medium from "../Images/medium.png"
import VK from "../Images/vk.png"
import Linkedin from "../Images/linkedin.png"

export function AfterTabSection() {
    return (
        <Box mt='5em' p='0em'>
            <VStack>
                <Heading>
                    Findtrend helps you to increase your <br />
                    productivity and reduce your computer's <br />
                    memory load, <span style={{ color: '#ADADAD' }}> an application that can <br />
                        fulfill your daily browsing needs.
                    </span>
                </Heading>
            </VStack>
            <Box mt='7em'>
                <VStack>
                    <Heading>
                        Findtrend make +1000 Startup grow
                    </Heading>
                    <Flex direction='row' wrap='wrap' p='2em' justify='center' gap='3'>
                        <Image src={Microsoft} alt='' />
                        <Image src={Allar} alt='' />
                        <Image src={Upwork} alt='' />
                        <Image src={Volvo} alt='' />
                        <Image src={Grub} alt='' />
                        <Image src={Verizon} alt='' />
                        <Image src={Coinbase} alt='' />
                        <Image src={Expedia} alt='' />
                        <Image src={Airtable} alt='' />
                        <Image src={Magento} alt='' />
                        <Image src={Carrera} alt='' />
                        <Image src={Bonanza} alt='' />
                        <Image src={Wetransfer} alt='' />
                        <Image src={Suzuki} alt='' />
                        <Image src={Algolia} alt='' />
                        <Image src={Heineken} alt='' />
                    </Flex>
                    <Box>
                        <VStack>
                            <Heading>All platform connect to Findtrend</Heading>
                            <Flex pt='3em'>
                                <Image src={Facebook} alt='' />
                                <Image src={Twitter} alt='' />
                                <Image src={Dribble} alt='' />
                                <Image src={Pinterest} alt='' />
                                <Image src={Medium} alt='' />
                                <Image src={VK} alt='' />
                                <Image src={Linkedin} alt='' />
                            </Flex>
                        </VStack>
                    </Box>

                    <VStack spacing='1em' pt='5em'>
                        <Image w='80%' src={Tweet1} alt='' />
                        <Image w='80%' src={Tweet2} alt='' />
                        <Image w='80%' src={Tweet3} alt='' />
                    </VStack>
                    <Box p='2em'>
                        <Button p='1.5em' borderRadius='2em' _hover='none' bgColor='black' color='white'>View More Trends</Button>
                    </Box>
                </VStack>
            </Box>
        </Box>
    )
}

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

