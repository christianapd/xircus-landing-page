import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, cardsCardStyle, gridStyle, colorStyle } from '../../../styles/globalStyle'

const CardsCard = ({icon,title,desc,bgColor, translate }) => (
  <Box bgGradient={bgColor} {...cardsCardStyle.cardBox}  placeholder='https://via.placeholder.com/70'>
    <Image src={icon} {...cardsCardStyle.imageIcon}/>
    <Heading {...cardsCardStyle.cardHeading} {...colorStyle.title}>{translate(title)}</Heading>
    <Text {...cardsCardStyle.cardText} {...colorStyle.description}>{translate(desc)}</Text>
  </Box>
)
export default function Cards({cardsData, translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.ConLg} centerContent>
        <Box >
          <Grid {...gridStyle.cardGridStyle}>
            {(cardsData || []).map((data, key) => (<CardsCard{...data}translate={translate}/>))}
          </Grid>
          </Box>
      </Container>
    </Box>
  );
}