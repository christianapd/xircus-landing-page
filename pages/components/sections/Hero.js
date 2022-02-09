import { Box, Button, Circle, Container, Heading, HStack, Image, Text, Stack, Flex, Spacer, Grid, Center } from '@chakra-ui/react';
import { typoStyle, buttonStyle, containerStyle, stackStyle, colorStyle } from '../../../styles/globalStyle'
import { FaPlay } from "react-icons/fa";


export default function Hero({ heroData, icon, translate }) {
  return (
    <Box as="section">
      <Container {...containerStyle.ConLg} mt="10px" centerContent>
        <Image src={icon} h="70px" />
        <Heading {...typoStyle.headline} {...colorStyle.headline}>{translate('XIRCUS')}</Heading>
        <Heading {...typoStyle.headline} {...colorStyle.headline}>{translate('Start')}</Heading>
        <Heading {...typoStyle.subheadline} {...colorStyle.subheadline}>{translate('Deploy')}</Heading>
        <Circle as="button" {...buttonStyle.heroPlayButton}{...colorStyle.subheadline}><FaPlay color="red" /></Circle>
        <HStack mb="10%">
          <Button {...buttonStyle.heroButton}>
            {translate('DeployButton')}
          </Button>
          <Box as="button" {...buttonStyle.heroButton} >
            <Text>{translate('GetButton')} </Text>
            <Text>{translate('GetButton2')}</Text>
          </Box>
        </HStack>
        <Stack {...stackStyle.heroAsSeenOnstackStyle}>
          <Heading {...typoStyle.asSeenOn} {...colorStyle.title}>{translate('As')}</Heading>
          {(heroData || []).map((data) => (
          <Center>
            <Image src={data} w="150px" fallbackSrc="https://via.placeholder.com/150x50png?" />
          </Center>))}
        </Stack>
      </Container>
    </Box>
  )
}