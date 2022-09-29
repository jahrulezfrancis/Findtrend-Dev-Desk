import { useState } from "react";
import { Box, Heading, VStack, Stack, Switch, Text, Divider, HStack, Flex, List, ListItem, ListIcon, Image, Button, Spacer, useMediaQuery } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import { FcCancel } from "react-icons/fc"
import FooterLogo from "../Images/footer-logo.png"
import { NavLink } from "react-router-dom";


function PricingTemp(props) {
    return (
        <Box bgColor={props.background} h='35em' minH='30em' w='21em' margin='2em' borderRadius='1em'>
            <VStack >
                <Stack align='center' justify='center'>
                    <Heading pt='1em'>{props.packageType}</Heading>
                    <Text>{props.packageDesc}</Text>
                    <Divider />
                    <HStack justify='center' align='center' pt='3em'>
                        <Heading>{`$${props.price}`}/</Heading>
                        <Text pt='1em' fontSize='1em'>Month</Text>
                    </HStack>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={props.packageList1Icon} color='black.500' outline='fill' />
                            {props.packageList1}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={props.packageList2Icon} color='black.500' outline='fill' />
                            {props.packageList2}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={props.packageList3Icon} color='black.500' outline='fill' />
                            {props.packageList3}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={props.packageList4Icon} color='black.500' outline='fill' />
                            {props.packageList4}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={props.packageList5Icon} color='black.500' outline='fill' />
                            {props.packageList5}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={props.packageList6Icon} color='black.500' outline='fill' />
                            {props.packageList6}
                        </ListItem>
                    </List>
                </Stack>
                <Spacer />
                <Box align='end' justify='end' p='2em'>
                    <Button _hover='none' bgColor={props.buttonColor} color={props.btntextColor}>Start free trial</Button>
                </Box>
            </VStack>
        </Box>
    )
}

export function Footer() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box m='1em'>
            <HStack justify={onMobile ? 'center' : 'space-between'} >
                <Stack direction={onMobile ? 'column' : 'row'} spacing='2em'>
                    <Image src={FooterLogo} alt='footerLogo' />
                    <Spacer />
                    <List>
                        <Stack justify={onMobile ? 'center' : 'center'} gap={onMobile ? '2em' : '2em'}
                            align={onMobile ? 'center' : 'center'}
                            direction={onMobile ? 'column' : 'row'} spacing='2em' mr={onMobile ? '0em' : '0em'}
                        >
                            <ListItem>
                                <NavLink>Privary Policy</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink>Terms and Conditions</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink>Contact Us</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink>Careers</NavLink>
                            </ListItem>
                        </Stack>
                    </List>
                </Stack>
            </HStack>
        </Box >
    )
}

export function BottomSec() {
    return (
        <Box bgColor='#A8FF35' minH='22em' >
            <VStack align='center' justify='center' pt='7em' spacing='.3em'>
                <Heading>Join us on email for</Heading>
                <Heading color='#87D322'>more trending topics</Heading>
                <Button w='8em' h='3em' bgColor='black' color='white' _hover='none' borderRadius='2em' p='1em'>Join Now</Button>
            </VStack>
        </Box>
    )
}

export function PricingList() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    const [selected, setselected] = useState(true);
    return (
        <Box bgColor='#000000' p='2em'>
            <VStack justify={onMobile ? 'center' : 'start'}>
                <Heading color='white'>Get Your Best Deals</Heading>
                <Stack align='center' direction='row'>
                    <Text color={selected ? 'white' : 'ash'} _active={{ color: 'white' }}>Monthly</Text>
                    <Switch size='lg' onChange={() => { selected === true ? setselected(false) : setselected(true) }} />
                    <Text color={selected ? 'ash' : 'white'}>Yearly</Text>
                </Stack>
                <Text color='whitesmoke' display={selected ? "none" : "block"}>Save 10% when your select to pay Yearly</Text>
            </VStack>
            <Flex direction={onMobile ? "column" : 'row'} justify='center' align={onMobile ? "center" : 'start'} pt='2em' spacing='1em'>
                <PricingTemp price={selected ? "8" : (8 / 100 * 70).toFixed(1)} background='white'
                    packageType='Personal' packageDesc='Special First Package for all'
                    packageList1='Up to 5 page each group' packageList1Icon={BsCheckCircle}
                    packageList2='Up to 10 group page' packageList2Icon={BsCheckCircle}
                    packageList3='5 Days group page saved' packageList3Icon={BsCheckCircle}
                    packageList4='' packageList4Icon={FcCancel}
                    packageList5='' packageList5Icon={FcCancel}
                    packageList6='' packageList6Icon={FcCancel}
                    buttonColor='#A8FF35'
                />
                <PricingTemp price={selected ? "20" : (20 / 100 * 70).toFixed(1)} background='#A8FF35'
                    packageType='Regular' packageDesc='Recommended for personal pro'
                    packageList1='naso you know' packageList1Icon={BsCheckCircle}
                    packageList2='naso you know' packageList2Icon={BsCheckCircle}
                    packageList3='naso you know' packageList3Icon={BsCheckCircle}
                    packageList4='naso you know' packageList4Icon={BsCheckCircle}
                    packageList5='' packageList5Icon={FcCancel}
                    packageList6='' packageList6Icon={FcCancel}
                    buttonColor='#000000' btntextColor='white'
                />
                <PricingTemp price={selected ? "48" : (48 / 100 * 70).toFixed(1)} background='white'
                    packageType='Premium' packageDesc='Packet for Startup & Company'
                    packageList1='Unlimited page each group' packageList1Icon={BsCheckCircle}
                    packageList2='Unlimited page each group' packageList2Icon={BsCheckCircle}
                    packageList3='Unlimited page each group' packageList3Icon={BsCheckCircle}
                    packageList4='Customize sorting group pages' packageList4Icon={BsCheckCircle}
                    packageList5='Customize group page name' packageList5Icon={BsCheckCircle}
                    packageList6='30 Days group page saved' packageList6Icon={BsCheckCircle}
                    buttonColor='#A8FF35'
                />
            </Flex>
        </Box>
    )
}
