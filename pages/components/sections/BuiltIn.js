import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, builtInCardStyle } from '../../../styles/globalStyle'
import Carousel from 'react-elastic-carousel'

const BuiltInData = [
  {
    icon: 'https://ucaca4c046e02ff01b94b1244baa.previews.dropboxusercontent.com/p/thumb/ABZwJB_Ea_Ybm-0iK48Rh3iO6FvzJxFYuOm0rsGiOiC8qGB8DGBRbKcRWmT4mHCK3S25RNfU95M3Gf1hSe0zrBAVkRZQt3g59bCymabG1yFesS49AORmQoWh1NNNbnaBfshuDbYLS01xo4KuECYRC9e9relGBHTT9Xb9cUDUJrAsooOo_OSWUGi8oluBw-CbZOaZkJw5YFVGMFStNdWgfHO5DoKvw8rLpb33_HYN1Y1ITgjRbu5HxuiiZDOgwFkZrCId_r__MPAWKXghpR7dCW341GuL9V1ZFdU7V5VWiSSEOU78hkC5RM0jCrn4C44Ldh45b7it7yJXUNl17nOtC0-U_xToCj6LgCOLjNsAh0Og3uNkdum4fCqCi7NqMmm78rc/p.png',
    Title: 'Staking'
  },
  {
    icon: 'https://uce4c5e07259c3e8f66643a60e3a.previews.dropboxusercontent.com/p/thumb/ABaRupfMJDpNk4uW9c-8NjpbDxdtIeTGpWFZeEjbJC-N2DU_Ugs9xnPBe_E8EpMbKCxDq1yUasrgAnhV1b9_NXoN-T-xyGN19g2pleFG73oM0uiCW73Md9VXOSEmtR8xtU2LJudwOkysIWzsddRp-ikv8tTiJooxyFcNRNPBuZkI3JDEGihJWFnELSxkRpAdBkBA7-C9IMVPos_y0ymjASaFYf09R9VBh2XX8Ep7DunEsCQB5h5of0FXj3mQJ5n6AXKS5fCpqkjCzdOKw1obzRzJ9vL9sfU7aBw9PrnbcUQSPhLUW0zKqECu9IQkxUNHjFgUabbXZAjdIBW_K_SoRgxMWH6mdRiM5mLXWUtb4lgQZ3wFmrLDGDN2nbPo5arlfqw/p.png',
    Title: 'Randomizer'
  },
  {
    icon: 'https://uc5de047b05d0035d93158b4d96f.previews.dropboxusercontent.com/p/thumb/ABYkCTO2_D4roP-DAiX129jwFMQoeTQKNNpWGdztBLvTAtDo7cceIJ9IiOK6pqt6Vu6wDglhqarStSPgtSOLq76Ox-BndKUPRxUwxh0BmZSbG9cNvGSDurEsTn09mr6NkbxVXH8VRsAjsk72_SdGZpdNlDVs0c-9M3ShxbeU6qikLyov53FeS9NZjBQ4Z-epV86A02omRtp0t7QB1LsYSF96kDntE8fEJQzteHDRInsC1D3tEP7bfQYuOebamO4tDLFHz1utPapZ90Leb5SlRbArQIVJV_te8HwXMIh4wzj1LUphxJwrmkOcNJw2iYxklRbp0lckHigCpgSCk0yhUN-MU_ORV5LBa3Cy0C_2iSD-_NYdjLNm2MzPfn7hesCcLeo/p.png',
    Title: 'NFT Airdrop'
  },
  {
    icon: 'https://uce5f17538a7e6f3168abf4e6605.previews.dropboxusercontent.com/p/thumb/ABbUfxEhU1ObbVdf3kPXO7rYlomUit4S96EPDXDMxYoD7Om_8h3gPIK_IK_ZKMn86VUDl15xB53cXDdzWP4mm_BC6oilBjpGoM8_nk-Yp8ld3M6bQytPbR6FMCXIt55dRKIxNhe1gF3Z86U-eDEPVOXWsXW_HjjF0ZRnGL4zRzOJJYQIxPGZqSV2PPY_mlo8KL96BLIctNRHyOcQSs9UvZrnatz_GGYPa6Hd-AKuhYMDM-q4YAWQ2GwXeHPBmue35RKL6piynb7KCZvdl8Ag2NWPv0Mbl3I2kjhs4iEY5YYHcjrGX0WbCZjVorqTqSXd1_1GFnHmLjo51ihU0TqBxAOA2eR2v8g3NVrGnzJam7WLODThtm9888C2EpdjrqB_VrY/p.png',
    Title: 'Token Auctions'
  },

]
const BuiltInCard = ({ icon, Title }) => (
  <Box {...builtInCardStyle.cardBox}>
    <Image {...builtInCardStyle.imageIcon} src={icon} />
    <Heading {...builtInCardStyle.cardText}>{Title}</Heading>
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

export default function BuiltIn() {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl}centerContent>
        <Heading {...typoStyle.title} mb="5%">Built-in and Add-On Features</Heading>
        <Carousel breakPoints={BreakPoints}>
          {(BuiltInData || []).map((datas, key) => (
            <BuiltInCard {...datas} />
          ))}
        </Carousel>


      </Container>
    </Box>
  );
}