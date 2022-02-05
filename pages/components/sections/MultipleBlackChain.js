import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer, Icon } from '@chakra-ui/react';
import { SiBinance, SiPolymerproject, } from 'react-icons/si';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, multipleBlackChainCardStyle, gridStyle } from '../../../styles/globalStyle'

const MultipleBlackChainData = [
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png',
    Title: 'BSC'
  },
  {
    icon: 'https://pbs.twimg.com/profile_images/1366339686432579587/THNz1DZm_400x400.png',
    Title: 'POLYGON'
  },
  {
    icon: 'https://www.quicknode.com/assets/icon-outlines/ftm-64fe74311ce8b2e1189590ea30da93efdd978fe3ace24208d14f7f9847b4f88b.png',
    Title: 'FANTOM'
  },
  {
    icon: 'https://www.ether.li/images/ethereum.png',
    Title: 'ETHEREUM'
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6836.png',
    Title: 'MOONBEAN'
  },
  {
    icon: 'https://assets.coingecko.com/coins/images/17984/large/9285.png?1630028620',
    Title: 'MOONRIVER'
  },
  {
    icon: 'https://servercarlosesverde.nyc3.digitaloceanspaces.com/elevenglobal/wp-content/uploads/2021/09/07115348/trading_avax.png',
    Title: 'AVALANCHE'
  },
  {
    icon: 'https://cryptologos.cc/logos/celo-celo-logo.png',
    Title: 'CELO'
  },
]
const MultipleBlackChainDataRow2 = [
  {
    icon: 'https://block.ventures/wp-content/uploads/2018/08/84-poa-network-2.png',
    Title: 'PQA',
    status:''

  },
  {
    icon: 'https://cryptologos.cc/logos/xdai-stake-logo.png',
    Title: 'XDAI',
    status:''
  },
  {
    icon: 'https://seeklogo.com/images/H/heco-logo-B2DCC2EA11-seeklogo.com.png',
    Title: 'HECO',
    status:''

  },
  {
    icon: 'https://assets.website-files.com/5f973c970bea5548ad4287ef/60a320b472858ace6700df76_arb-icon.svg',
    Title: 'ARBITRUM',
    status:''
  },
  {
    icon: 'https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/702/600/original/OP_Logo.png?1641411869',
    Title: 'OPTIMISM',
    status:''
  },
  {
    icon: 'https://dappimg.com/media/image/dapp/f090b4626acd4a789fede031edb21db0.blob',
    Title: 'FUSE',
    status:''
  },
  {
    icon: 'https://cryptologos.cc/logos/aurora-aoa-logo.png',
    Title: 'AURORA',
    status:''
  },
  {
    icon: 'https://global-uploads.webflow.com/61a98989a418f6f2acefef70/61cd8eb233f5cf657ded86a2_942454e3-c71d-474f-a0af-070f846763d3.png',
    Title: 'SOLANA',
    status: 'SOON'
  },
  {
    icon: 'https://cryptologos.cc/logos/flow-flow-logo.png',
    Title: 'FLOW',
    status: 'SOON'
  },
  {
    icon: 'https://www.pngall.com/wp-content/uploads/10/NEAR-Protocol-Crypto-Logo.png',
    Title: 'NEAR',
    status: 'SOON'
  },
]
const Row1 = ({ icon, Title, status }) => (
  <Stack {...multipleBlackChainCardStyle.cardStack}>
    <Image {...multipleBlackChainCardStyle.imageIcon} src={icon} />
    <Text {...multipleBlackChainCardStyle.cardText}>{Title}</Text>
      <Text {...multipleBlackChainCardStyle.cardTextStatus}>{status}</Text>
  </Stack>
)
const Row2 = ({ icon, Title, status }) => (
  <Stack {...multipleBlackChainCardStyle.cardStack}>
    <Image {...multipleBlackChainCardStyle.imageIcon} src={icon} />
    <Text {...multipleBlackChainCardStyle.cardText}>{Title}</Text>
      <Text {...multipleBlackChainCardStyle.cardTextStatus}>{status}</Text>
  </Stack>
)


export default function MultipleBlackChain() {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl} centerContent>
        <Heading {...typoStyle.title}>Multiple BlackChain Support</Heading>
        <Text{...typoStyle.subtitle} mb="5%">Xircus Support multi-chain deployment for Multiple blockchain selection</Text>
        <Flex w="100%" mb="30px" >
          <Grid {...gridStyle.multipleBlackChaingGridSyleRow1}>
            {(MultipleBlackChainData || []).map((data, key) => (<Row1{...data}/>))}
          </Grid>
        </Flex>
        <Flex w="100%" >
          <Grid {...gridStyle.multipleBlackChaingGridSyleRow2}>
            {(MultipleBlackChainDataRow2 || []).map((datas, key) => (
                <Row2 {...datas}/>
            ))}
          </Grid>

        </Flex>
      </Container>
    </Box>
  );
}