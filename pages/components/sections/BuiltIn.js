import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, builtInCardStyle, colorStyle } from '../../../styles/globalStyle'
import Carousel from 'react-elastic-carousel'

const BuiltInCard = ({ icon, Title, translate }) => (
  <Box {...builtInCardStyle.cardBox}>
    <Image {...builtInCardStyle.imageIcon} src={icon} />
    <Heading {...builtInCardStyle.cardText}>{translate(Title)}</Heading>
  </Box>
)
const BreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 850, itemsToShow: 4, itemsToScroll: 1, pagination: false },
  { width: 1150, itemsToShow: 4, itemsToScroll: 1, pagination: false },
  { width: 1450, itemsToShow: 4, itemsToScroll: 1, pagination: false },
  { width: 1750, itemsToShow: 4, itemsToScroll: 1, pagination: false },
]

export default function BuiltIn({builtInData, translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl}centerContent>
        <Heading {...typoStyle.title} mb="5%" {...colorStyle.title}>{translate("Built-in")}</Heading>
        <Carousel breakPoints={BreakPoints}>
          {(builtInData || []).map((datas, key) => (
            <BuiltInCard {...datas} translate={translate} />
          ))}
        </Carousel>


      </Container>
    </Box>
  );
}