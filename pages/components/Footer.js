import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer, Link, Center } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, gridStyle, linkStyle } from '../../styles/globalStyle'
import { FaTelegramPlane, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer({footerData,translate}) {
  return (
    <Box as="section" pb={1} >
      <Container {...containerStyle.conXl} mb="10px" centerContent>
        <Box>
          <Grid {...gridStyle.footerGridStyle} >        
              <HStack mx="auto">
                <Text>{translate('All')}</Text>
              </HStack>         
            <HStack spacing={5} mx="auto" fontSize="20px">
              <FaTelegramPlane />
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
              <FaGithub />
              <FaInstagram />
              <FaLinkedin />
            </HStack>          
            <HStack spacing={5} mx="auto" >
              {(footerData || []).map((data, key) => ( <Link href={data.href} {...linkStyle.footerLinkStyle} >{translate(data.label)}</Link>))}
            </HStack>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}