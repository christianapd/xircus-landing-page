import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, howToEarnCardStyle, gridStyle, colorStyle } from '../../../styles/globalStyle'


const HowToEarnCard = ({ image, title, desc, translate }) => (
  <HStack {...howToEarnCardStyle.HowToEarnHStack} align="left" >
    <Image src={image} {...howToEarnCardStyle.imageIcon} />
    <Stack>
      <Heading {...howToEarnCardStyle.cardHeading} {...colorStyle.title}>
        {translate(title)}
      </Heading>
      <Text {...howToEarnCardStyle.cardText} {...colorStyle.description}>
        {translate(desc)}
      </Text>
    </Stack>
  </HStack>
)
export default function HowToEarn({howToEarnData, translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.ConLg} centerContent>
        <Heading {...typoStyle.title}{...colorStyle.headline}>{translate('How')}</Heading>
        <Text {...typoStyle.subtitle} mb="3%" {...colorStyle.subheadline}> {translate('Unlesh')}</Text>
        <Box w="100%">
          <Grid {...gridStyle.howToEarnGridStyle}>
            {(howToEarnData || []).map((data, key) => (<HowToEarnCard{...data} translate={translate} />))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}