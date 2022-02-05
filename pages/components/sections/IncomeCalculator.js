import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer,Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark, } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, stackStyle, gridStyle } from '../../../styles/globalStyle'
import { GoPrimitiveDot } from 'react-icons/go';
import { useState } from 'react';

function SliderMarkExample() {
  const [sliderValue, setSliderValue] = useState(50)
  return (
    <Box pb="100px">
    <Slider onChange={(val) => setSliderValue(val)}>
      <SliderMark value={1} mt={5} ml='-2' fontSize='lg'>
        $1
      </SliderMark>
      <SliderMark value={100} mt={5} ml='-10' fontSize='lg'>
       $100
      </SliderMark>
     
      <SliderTrack bg='red.300'>
        <SliderFilledTrack bg='red'/>
      </SliderTrack>
      <SliderThumb />
    </Slider>
    </Box>
  )
}


export default function IncomeCalculator() {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl}  centerContent>
        <Box>
        <Stack {...stackStyle.incomeCalculatorStactStyle}>
          <Stack align="left">
          <Heading mb="5%">Income Calculator</Heading>
          <HStack><GoPrimitiveDot/><Text>Get Started for free</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>No hidden costs</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>$1 mint fee only</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>Owner configured transaction fees starting at 2%</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>Not taking royalty fess</Text></HStack>
          </Stack>
          <Stack  {...stackStyle.incomeCalculatorInnerStactStyle}> >
          <Heading fontSize="20px">Income Calculator</Heading>
          <Text fontSize="15px">example using 1,000,000 NFT item Minted. paid with usdc</Text>
          <Heading fontSize="20px">What's your marketplace mint fee </Heading>
          <SliderMarkExample/>
          <Grid {...gridStyle.incomeCalculatorGridStyle}>
            <Stack >
              <Heading fontSize={15}>Marketplace Owner</Heading>
              <Text color="red.300">450,000 USDC</Text>
            </Stack>
            <Stack >
              <Heading fontSize={15}>Data Provider</Heading>
              <Text color="red.300">100,000 USDC</Text>
            </Stack>        
            <Stack>
              <Heading fontSize={15}>Ambassador</Heading>
              <Text color="red.300">200,000 USDC</Text>
            </Stack>
            <Stack>
              <Heading fontSize={15}>Xircus</Heading>
              <Text color="red.300">250,000 USDC</Text>
            </Stack>           
          </Grid>
          </Stack>
        </Stack>
        </Box>
      </Container>
    </Box>
  );
}