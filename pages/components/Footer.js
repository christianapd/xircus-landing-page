import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer, Link, Center } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, gridStyle, linkStyle } from '../../styles/globalStyle'
import { FaTelegramPlane, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Links = ['Blog', 'Resources', 'Term and Condition', 'Privacy', 'Contact Us']

export default function Footer() {
  return (
    <Box as="section" pb={1} >
      <Container {...containerStyle.conXl} mb="0" centerContent>
        <Box>
          <Grid {...gridStyle.footerGridStyle} >        
              <HStack mx="auto">
                <Text>All Right Reserved 2021 | Xircus Pte.Ltd</Text>
              </HStack>         
            <HStack spacing={5} mx="auto">
              <FaTelegramPlane />
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
              <FaGithub />
              <FaInstagram />
              <FaLinkedin />
            </HStack>          
            <HStack spacing={5} mx="auto">
              {Links.map((link) => (<Link {...linkStyle.footerLinkStyle} key={link}>{link}</Link>))}
            </HStack>
          
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}