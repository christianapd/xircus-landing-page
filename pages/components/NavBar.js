
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React from "react";
import {
  Box,
  Image,
  Spacer,
  Flex,
  HStack,
  Link,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Container,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { typoStyle, containerStyle, boxStyle, flexStyle, linkStyle, buttonStyle, imageStyle } from '../../styles/globalStyle'


const Links = ['FEATURES', 'GET STARTED', 'HOW TO EARN'];

export default function navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  return (
    <Box {...boxStyle.navBarBoxStyle}>
      <Container {...containerStyle.navBarContainerStyle}>
        <HStack>
          <Flex>
            <Image src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" {...imageStyle.navBarImageStyle} />
            <Heading {...typoStyle.navBartypoStyle}>XIRCUS</Heading>
          </Flex>
          <Spacer />
          <Flex {...flexStyle.navBarFlexStyle}>
            {Links.map((link) => (<Link {...linkStyle.navBarLinkStyle} key={link}>{link}</Link>))}
            <Button {...buttonStyle.navBarButtonStyle}>English <MdOutlineKeyboardArrowDown /></Button>
          </Flex>

          <Button ref={btnRef} display={{ md: 'none' }} onClick={onOpen}>
              <HamburgerIcon />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Stack mt="20%">
                  {Links.map((link) => (<Link key={link}>{link}</Link>))}
                  <Button {...buttonStyle.navBarButtonStyle}>English <MdOutlineKeyboardArrowDown /></Button>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Box>
  );
}