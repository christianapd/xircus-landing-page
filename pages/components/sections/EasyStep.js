import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, imageStyle } from '../../../styles/globalStyle'
import { useState } from 'react'

const easyStepData = [
  {
    button: 'Deploy a Maketplace',
    image: 'https://images14.fotki.com/v1659/photos/5/115/13502360/explorer3dconnectionspacepilot-vi.jpg'
  },
  {
    button: 'Deploy a Collection',
    image: 'https://wallpaperaccess.com/full/2153948.png'
  },
  {
    button: 'Mint s NFT',
    image: 'https://wallpaperaccess.com/full/2481989.jpg'
  }
]
export default function EasySptep({translate}) {
  const [images, setImages] = useState(easyStepData[0].image)
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl} centerContent>
        <Heading {...typoStyle.title}>{translate('Easy')}</Heading>
        <HStack spacing={{ base: 3, sm: 4, md: 6 }} mb="4%">
          {(easyStepData || []).map((data, key) => (<Button {...buttonStyle.EasyStepButton} onClick={() => setImages(data.image)} >{data.button}</Button>))}
        </HStack>
        <Box w="100%">
          <Image {...imageStyle.easyStepImageStyle} src={images} />
        </Box>
      </Container>
    </Box>
  );
}