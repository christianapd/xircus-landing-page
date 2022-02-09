
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
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Router from 'next/router'
import { typoStyle, containerStyle, boxStyle, flexStyle, linkStyle, buttonStyle, imageStyle } from '../../styles/globalStyle'


export default function navBar({ navBarData, icon, translate }) {
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
            {(navBarData.navBar || []).map((data, key) => (<Link {...linkStyle.navBarLinkStyle} >{translate(data.label)}</Link>))}
            <Select defaultValue="en-US" {...buttonStyle.navBarButtonStyle} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
              {(navBarData.language || []).map((data, key) => (<option value={data.value} >{data.label}</option>))}
            </Select>
          </Flex>
          <Button ref={btnRef} display={{ md: 'none' }} onClick={onOpen}>
            <HamburgerIcon />
          </Button>
        </HStack>
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
                {(navBarData.navBar || []).map((data, key) => (<Link {...linkStyle.navBarLinkStyle} >{translate(data.label)}</Link>))}
                <Select defaultValue="en-US" {...buttonStyle.navBarButtonStyle} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
                  {(navBarData.language || []).map((data, key) => (<option value={data.value} >{data.label}</option>))}
                </Select>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
}