import { Box, Container, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { typoStyle, containerStyle, takeFullControlCardStyle, boxStyle, gridStyle, colorStyle } from '../../../styles/globalStyle'

const TakeFullControlCard = ({icon,text, Translate }) => (
  <Box {...takeFullControlCardStyle.outerBox}>
    <Box {...takeFullControlCardStyle.wrapperBox}>
      <Image src={icon} {...takeFullControlCardStyle.imageIcon} />
      <Text {...takeFullControlCardStyle.cardText}{...colorStyle.description}>{Translate(text)}</Text>
    </Box>
    <Box {...takeFullControlCardStyle.absuluteBox} />
  </Box>
)

export default function TakeFullControl({takeFullControlData, translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl}  centerContent>
        <Heading {...typoStyle.title} {...colorStyle.title}>{translate('Take')}</Heading>
        <Text {...typoStyle.subtitle} {...colorStyle.subTitle}>{translate('Built')}</Text>
        <Box>
          <Grid {...gridStyle.takeFullControlGridStyle}>
            {(takeFullControlData || []).map((data, key) => ( <TakeFullControlCard {...data} Translate={translate} /> ))}
          </Grid>
        </Box>

        <Box {...boxStyle.NFTmakeBoxStyle}>
          <Text>"{translate('NFTs make')}"</Text>
        </Box>
      </Container>
    </Box>
  );
}