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

export default function IncomeCalculator({translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl}  centerContent>
        <Box>
        <Stack {...stackStyle.incomeCalculatorStactStyle}>
          <Stack>
          <Heading mb="5%">{translate('Income')}</Heading>
          <HStack><GoPrimitiveDot/><Text>{translate('Get')}</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>{translate('No')}</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>{translate('$1')}</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>{translate('Owner')}</Text></HStack>
          <HStack><GoPrimitiveDot/><Text>{translate('Not')}</Text></HStack>
          </Stack>
          <Stack  {...stackStyle.incomeCalculatorInnerStactStyle}> 
          <Heading fontSize="20px">{translate('Calculator')}</Heading>
          <Text fontSize="15px">{translate('Example')}</Text>
          <Heading fontSize="20px">{translate('Whats')}</Heading>
          <SliderMarkExample/>
          <Grid {...gridStyle.incomeCalculatorGridStyle}>
            <Stack >
              <Heading fontSize={15}>{translate('Marketplace')}</Heading>
              <Text color="red.300">450,000 USDC</Text>
            </Stack>
            <Stack >
              <Heading fontSize={15}>{translate('Data')}</Heading>
              <Text color="red.300">100,000 USDC</Text>
            </Stack>        
            <Stack>
              <Heading fontSize={15}>{translate('Ambassador')}</Heading>
              <Text color="red.300">200,000 USDC</Text>
            </Stack>
            <Stack>
              <Heading fontSize={15}>{translate('Xircus')}</Heading>
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