import {
    HStack, Box, ListItem, UnorderedList, Image, Button, Spacer, VStack, Heading, Text,
    Stack, Menu, IconButton, MenuButton, MenuList, MenuItem, useMediaQuery
} from '@chakra-ui/react'

import React from 'react'
import { MdMenu } from "react-icons/md"
import { NavLink } from 'react-router-dom'
import HeaderLogo from "../Images/header-logo.png"
import TwitterDesign from "../Images/log-twitter.png"
import FacebookDesign from "../Images/log-facebook.png"
import PinterestDesign from "../Images/log-pinterest.png"
import BaseballDesign from "../Images/log-elo-musk.png"


export default function Navigation() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box display={onMobile ? 'none' : 'block'}>
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

export function MobileMenu() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box display={onMobile ? 'block' : 'none'}>
            <Menu>
                <MenuButton as={IconButton} icon={<MdMenu />} />
                <MenuList>
                    <MenuItem>
                        About
                    </MenuItem>
                    <MenuItem>
                        How it works
                    </MenuItem>
                    <MenuItem>
                        Solution
                    </MenuItem>
                    <MenuItem>
                        Features
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export function WelcomeBox() {
    return (
        <Box>
            <VStack spacing='4em'>
                <Stack mt='5em' align='center' spacing='1em'>
                    <Heading fontWeight='900' lineHeight='1.3em' fontSize='4em' textAlign='center' color='white'>
                        Minimize your tabs. <br />
                        Find the trends!
                    </Heading>
                    <Text lineHeight='1.7em' textAlign='center' color='#8B8B8B'>
                        Don’t let your computer memories consumes all of those browser tabs. <br />
                        Findtrend  let you gathers all of your favorite website into one place.
                    </Text>
                    <Button _hover='none' fontFamily='Allerta' p='1em' bgColor='#A8FF35' borderRadius='2em' w='10em' h='3em'>Get Started 🔥</Button>
                </Stack>
                <HStack w='auto' m='3em'>
                    <Box>
                        <Image w='18em' src={TwitterDesign} alt='' />
                    </Box>
                    <Box pt='5em'>
                        <Image w='18em' src={PinterestDesign} alt='' />
                    </Box>
                    <Box>
                        <Image w='18em' src={FacebookDesign} alt='' />
                    </Box>
                    <Box ml='-30em' mt='4em' w='auto'>
                        <Image pt='5em' w='18em' src={BaseballDesign} alt='' />
                    </Box>
                </HStack>
            </VStack>
        </Box>
    )
}