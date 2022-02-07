
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
  Select,
  Container,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Router from 'next/router'
import { typoStyle, containerStyle, boxStyle, flexStyle, linkStyle, buttonStyle, imageStyle } from '../../styles/globalStyle'

export default function navbar({ icon, translate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  return (
    <Box {...boxStyle.navBarBoxStyle}>
      <Container {...containerStyle.navBarContainerStyle} >
        <HStack>
          <Flex>
            <Image src={icon} {...imageStyle.navBarImageStyle} />
            <Heading {...typoStyle.navBartypoStyle}>{translate('XIRCUS')}</Heading>
          </Flex>
          <Spacer />
          <Flex {...flexStyle.navBarFlexStyle}>
            <Link {...linkStyle.navBarLinkStyle} >{translate('FEATURES')}</Link>
            <Link {...linkStyle.navBarLinkStyle} >{translate('GET STARTED')}</Link>
            <Link {...linkStyle.navBarLinkStyle} >{translate('HOW TO EARN')}</Link>
            <Select defaultValue="en-US" {...buttonStyle.navBarButtonStyle} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
              <option value="en-US" >English</option>
              <option value="ph">Filipino</option>
              <option value="vn">Vietnamese</option>
            </Select>
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
                <Stack mt="20%" w="100%">
                  <Link {...linkStyle.navBarLinkStyle} >{translate('FEATURES')}</Link>
                  <Link {...linkStyle.navBarLinkStyle} >{translate('GET STARTED')}</Link>
                  <Link {...linkStyle.navBarLinkStyle} >{translate('HOW TO EARN')}</Link>
                  <Select defaultValue="en-US" isFullWidth {...buttonStyle.navBarButtonStyle} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
                    <option value="en-US" >English</option>
                    <option value="ph">Filipino</option>
                    <option value="vn">Vietnamese </option>
                  </Select>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </Box>
  );
}