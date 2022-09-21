import { HStack, Box, ListItem, UnorderedList, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderLogo from "../Images/header-logo.png"


export default function Navigation() {
    return (
        <Box>
            <UnorderedList listStyleType='none' mr='.8em' p='1em'>
                <HStack>
                    <ListItem>
                        <NavLink>
                            <Image src={HeaderLogo} alt='' />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink>About</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink>How it works</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink>Pricing </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink>Solution</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink>Features</NavLink>
                    </ListItem>
                    <Box>
                        <HStack>
                            <Button>Login</Button>
                            <Button>Register</Button>
                        </HStack>
                    </Box>
                </HStack>
            </UnorderedList>
        </Box>
    )
}