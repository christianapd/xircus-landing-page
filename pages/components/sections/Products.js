import { Box, Container, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { typoStyle, containerStyle, productCardStyle, gridStyle } from '../../../styles/globalStyle'

const ProductCard = ({ icon, title, desc, translate}) => (
  <Box {...productCardStyle.boxCardStyle}>
    <Image src={icon} {...productCardStyle.imageIcon} />
    <Heading {...productCardStyle.cardHeading}>{translate(title)}</Heading>
    <Text {...productCardStyle.cardText}>{translate(desc)}</Text>
  </Box>
)

export default function Products({productsData, translate}) {
  return (
    <Box as="section">
      <Container {...containerStyle.conXl}  centerContent>
        <Box w="100%">
          <Heading {...typoStyle.productHeading}>{translate('Products')}</Heading>
        </Box>
        <Box>
          <Grid {...gridStyle.productGridStyle}>
            {(productsData || []).map((data, key) => (<ProductCard{...data} translate={translate}  />))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}