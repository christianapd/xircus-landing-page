import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer, Icon } from '@chakra-ui/react';
import { SiBinance, SiPolymerproject, } from 'react-icons/si';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, multipleBlackChainCardStyle, gridStyle, colorStyle } from '../../../styles/globalStyle'

const Row1 = ({ icon, Title, status }) => (
  <Stack {...multipleBlackChainCardStyle.cardStack}>
    <Image {...multipleBlackChainCardStyle.imageIcon} src={icon} />
    <Text {...multipleBlackChainCardStyle.cardText}>{Title}</Text>
  </Stack>
)
const Row2 = ({ icon, Title, status }) => (
  <Stack {...multipleBlackChainCardStyle.cardStack}>
    <Image {...multipleBlackChainCardStyle.imageIcon} src={icon} style={{fill:'white'}}/>
    <Text {...multipleBlackChainCardStyle.cardText}>{Title}</Text>
      <Text {...multipleBlackChainCardStyle.cardTextStatus}>{status}</Text>
  </Stack>
)


export default function MultipleBlackChain({multipleBlackChainData,translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl} centerContent>
        <Heading {...typoStyle.title} {...colorStyle.title}>{translate('Multiple')}</Heading>
        <Text {...typoStyle.subtitle}{...colorStyle.subTitle} mb="5%">{translate('Xircus')}</Text>
        <Box mb="30px" align="center">
          <Grid {...gridStyle.multipleBlackChaingGridSyleRow1} {...colorStyle.primary}>
            {(multipleBlackChainData || []).slice(0, 8).map((data, key) => (<Row1{...data}/>))}
          </Grid>
        </Box>
        <Box >
          <Grid {...gridStyle.multipleBlackChaingGridSyleRow2} {...colorStyle.primary}>
            {(multipleBlackChainData || []).slice(8).map((datas, key) => (
                <Row2 {...datas}/>
            ))}
          </Grid>

        </Box>
      </Container>
    </Box>
  );
}