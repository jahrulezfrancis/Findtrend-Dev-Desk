import { HStack, Box, ListItem, UnorderedList, Image, Button, Spacer, VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderLogo from "../Images/header-logo.png"
import TwitterDesign from "../Images/log-twitter.png"
import FacebookDesign from "../Images/log-facebook.png"
import PinterestDesign from "../Images/log-pinterest.png"
import BaseballDesign from "../Images/log-elo-musk.png"


export default function Navigation() {
    return (
        <Box>
            <UnorderedList listStyleType='none' mr='.8em' p='1em'>
                <HStack justify=''>
                    <ListItem>
                        <NavLink>
                            <Image src={HeaderLogo} alt='' />
                        </NavLink>
                    </ListItem>
                    <Spacer />
                    <HStack spacing='2em'>
                        <ListItem color='white' fontFamily='Effre' fontWeight='400' fontSize='1em'>
                            <NavLink >About</NavLink>
                        </ListItem>
                        <ListItem color='white' fontFamily='Effre' fontWeight='400' fontSize='1em'>
                            <NavLink>How it works</NavLink>
                        </ListItem>
                        <ListItem color='white' fontFamily='Effre' fontWeight='400' fontSize='1em'>
                            <NavLink color='white' fontFamily='Effre' fontWeight='400' fontSize='1em'>Pricing </NavLink>
                        </ListItem>
                        <ListItem color='white' fontFamily='Effre' fontWeight='400' fontSize='1em'>
                            <NavLink>Solution</NavLink>
                        </ListItem>
                        <ListItem color='white' fontFamily='Effre' fontWeight='400' fontSize='1em'>
                            <NavLink>Features</NavLink>
                        </ListItem>
                    </HStack>
                    <Spacer />
                    <Box>
                        <HStack>
                            <Button bgColor='black' color='white' _hover='none' borderRadius='2em'>Login</Button>
                            <Button bgColor='white' color='black' borderRadius='2em' w='8em'>Register</Button>
                        </HStack>
                    </Box>
                </HStack>
            </UnorderedList>
        </Box>
    )
}

export function WelcomeBox() {
    return (
        <Box>
            <VStack>
                <Heading color='white'>Minimize your tabs.</Heading>
                <Heading color='white'>Find the trends!</Heading>
                <Text color='white'>
                    Don’t let your computer memories consumes all of those browser tabs. <br />
                    Findtrend  let you gathers all of your favorite website into one place.
                </Text>
                <Button p='1em' bgColor='#A8FF35' borderRadius='2em' w='10em' h='3em'>Get started</Button>
                <HStack w='auto' m='3em'>
                    <Image w='18em' src={TwitterDesign} alt='' />
                    <Image pt='5em'  w='18em' src={PinterestDesign} alt='' />
                    <Image w='18em' src={FacebookDesign} alt='' />
                    <Image pt='5em' w='18em' src={BaseballDesign} alt='' />
                </HStack>
            </VStack>
        </Box>
    )
}