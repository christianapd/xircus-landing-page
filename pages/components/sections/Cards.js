import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, cardsCardStyle, gridStyle } from '../../../styles/globalStyle'

const CardsData = [
  {
    icon: 'https://uc34906a6d1d7ccb26981140859e.previews.dropboxusercontent.com/p/thumb/ABbc_qZEACfdOHeKH3I6_H6oZFX3spqn0obJtdMmOZCSWSqHuYK06z9dyfIdZAW93HQ7oLMvySRAzX8XdhW4T-4MubNBbZokSOjsTlWreR6HPdJD9e7zQtCAz-Bn7rgZS6KSma-w7HvjLDAH2n8ilb13g-4kgrU6cq5EMS8uPfhWNBYlyJYHoJ96qv4_WANn8IheiZwIFzD1JvNOGu_IojeUCjTR_f1RSiRfRIi20onZsaxc1zGwiiKLaoluNgzARAiuqy7Pqkf48tBPuFZPvk4UnP7YqX_JUnjlKxhbEikigfd-FtftosOwPcLBn0v4aDM1JM2rcwsjf1J7QgrNc-k7eEjIWqrTsG9a7GSmKXu4sBuTg0c_6UKxoWF1X6RuMOE/p.png',
    title: 'NFTs',
    desc: 'fully customizable NFT collection for single or multiple edition with built-in sale, royalty and split features',
    bgColor: 'pink'
  },
  {
    icon: 'https://ucb06d36145e7b7ac83cbdfbc30f.previews.dropboxusercontent.com/p/thumb/ABYwIl2X-J3I9slmBd-o3MdEmwamh56-QN7wDJ-yBwt4IzMBsYOJy70chzYVCW2twKWXrCrJSFyrqTQ7b9SABSt47VEsOLUFNxXSZM2JYbYTM29NDcKUrrPxfYPH4Qyn2tPQBSxncHmAeGDq66x0-PWO-sNcq99UjsutsFxkCBmCep6-Xhw3di_wVQvmNLuCcFDUiDt5dZBKaiX-2MzXv33Qv6jFHx8EnKnu7mBqPmL0d4z_eqm-N8epwGShEtLz2mx3ZkDj9dHNuIp-txYukMnun3A9ciKc-kMurQEabk3vSZa6l0M1q_Ixly7mBaFh3pOtdjMezzL8G6pJ5RXd4EqfyobGR-Fk1XWaauayqqndA1MjcbjI6sZfpL4o2Ka4UKQ/p.png',
    title: 'Marketplaces',
    desc: 'Deploy your personal or community marketplace with a click of a button with built-in stats',
    bgColor: 'red'
  },
  {
    icon: 'https://ucfca65f53c03414f3f555bd2641.previews.dropboxusercontent.com/p/thumb/ABYuLhUkq2Zjg9NL8svbeGOQYzF6B6Tr7hYjqFfmbta0sAg7Xeu4PLDylyZ8kCnNfPNge7aFlM4i8qA9yHC264frVGLKCDOmfJaA9jUONHn7Ky8AI5LB6fhvoDPtPWmSW6xrM_XpRGLhi73rDyYfk1JvwTwCEwDzE3AyOAcEDTOJYtuXTZ3-SQSgZTYomLzkkNA9duxqzD1rLK0Lv7hqflIyyf5vYIZyluv64Hw3dFZLDdy_nplYNChgJ1qfLKkVOil2wDCzyBCwy30AAHv0qrYJTJhDzhHFi0qQVqOX2u_OkGm7uK34p8xmewrb-OSf4qI5ppnW7ImDKfMsdm18HBTh7NAitTA8til2qFW1YYwbt8FKhpKcuqH7s90FJ97RQbc/p.png',
    title: 'Tokens',
    desc: 'Pay using your favorite crytocurrency configured with your exchange of choice',
    bgColor: 'green'
  },
  {
    icon: 'https://uc913e29e2642c648b0b5d1687fa.previews.dropboxusercontent.com/p/thumb/ABY3nT7dma0LnrraRdIiZGKiADxhTDYHJo5sUmVGLuz5OMCxWzjA5Puvsmc-5W4YWbPabIDgJH1xGeQFL7391xBCVh1BG2BZtJwk0iij2xxIvTG75a28tTvF3dmgSOCLKAah1rxkxYSN9-G6VBsx1ZqMPEfLIUEA44yd708UQ5xGuhldsmYPRuaGEHPa5zXB2pAw8xXgcUAy6iBdsLXp9m7ZTe3gRufsQ7SgzXJpNMu7eME1etjYl30OfRJTp1KFjfetKZOwjeVZP93Q6FrbvwpmcGGie4V516v5Wbl-XW4r3jamO4Tf2T1xlP9c7NVuv5wy2FKCLaZyTXdLtpstX92OGDyvPQOAsfH0aC4VaASlHfzRGKFmwaZnxxUg0CXM0Q0/p.png',
    title: 'Packs',
    desc: 'Loots boxes of NFT items at a discounted price',
    bgColor: 'pink'
  },
  {
    icon: 'https://uc30f486bf2af779d3c20e999658.previews.dropboxusercontent.com/p/thumb/ABZbcEPBT9Jm5wIzISXdp_XGbfi1hSh06FxQkORZL7FIXhX4tFSy931iI4xLg2cYHI0ivuh2AiGxkwPdFdO3dFYTpO51Sdg2_jWuae_T5YCBE57nzD_vH5vWyTu8FrCtJAJ9PH-k79yHLEyzRrspRW_EZaPbTEcPweaDUtJyFchFOW6Wrxb9cluX9ftSisiXpgWXfJpMCVA6P6y-rpx8QtHQAoP6ro0c1QNMkCj628-zdfQSKXBeJk9h5X9KYj9pCHhaG_nBpmoAOtU-vYebO_uV14dniJ-IriaNl447l7nyXJ_P_-v-gdEdZmcyX8x88-Q52A1LSAcMLSJJgyHANFT9MMpl-jO8g-8TTPfSyglm42-GleVosNgmS13F_Y36fWk/p.png',
    title: 'Staking',
    desc: 'Deploy staking contracts that your marketplace users can use',
    bgColor: 'red'
  },
  {
    icon: 'https://uc8d3ce85ba4053e687b311a8bfd.previews.dropboxusercontent.com/p/thumb/ABbtdttrMGBbYWIibZ5qdqJw3BEfREcXfaWmyP5rGqo7oJdE4gdMWrQSLdHhhX9G8fPpAmW04DO0eMBlnfDfcM9IpVXbIMhoYJ5tkMReHrmAM-GWfo9hstG6WnRRkQReWnUVttItnG3qYkqm9bZJh_GJQBb3CG6awgwlgM-Psnq4abTtM1jUlAgsXM3yZNcAVbtie90Tt5sh1QTgPFcetS5IPobJJtBjObT5ocxSEI6JqZPI3zVNWbtG7X5VAWPZw5Hme3GPBI1bXexoP0FlkSdrMAB2qTtnPJwn7sd7jMabhFW18r1eqr5KLdSXJ2ZKMWeRmsz-n0IPIZvuV42otwTanr2Y_DmxLCNwbhaOdm00bTDTcQBERlV5FdVUCeBydwI/p.png',
    title: 'Drops',
    desc: 'Scheduled drops for your users to easily claim NFTs and tokens',
    bgColor: 'green'
  },
  {
    icon: 'https://ucfbd9eab606802ffbe5b690f5bf.previews.dropboxusercontent.com/p/thumb/ABYuSDVlgDEK2TS7TcsT25h8g08xxT3UutNXd3QqhsgmKEa0GEVQVjaiM77sKbZ1djbhT8vPTPWrpcdjylktV42FzSVrapsvT5LmreC0I1nywwQ_wP-_jGC1__QJ2bR97H8RK-VbH6PhPYmy1g1S_vRC-UCIbej3-Bbt6Ww_Q0WyBDTb0a-yIz9NsxUmGbPfbHA3cg8faqPL_-UN-1mkqWS_WuDj5Y4fNsZtYKRMKWFMFvlV1lkNEUechZay9aE274kk3UxcIBRrk8NuI1bqLt22RJJi2cOSmTGhyM_U7U3dCIS3IWMlXqg2FOY5ChBN6dV_WK-S0uHo72w5MHm5lS6rQx-qfTe05_Q8XbzOgXBCVWkXmuqw3EewIDupLa6LNFw/p.png',
    title: 'Skins',
    desc: ' Premium skins to overide the look of your website anytime',
    bgColor: 'pink'
  },
  {
    icon: 'https://uc26aa3efbded0bcf31eb07cdcf2.previews.dropboxusercontent.com/p/thumb/ABabRQk66hzU0h7iLXcwgj4myWJRVQLBZ-RmgFHsxyZSV-AWRmdGNEwsqq5nRFh0fn4964HRaLEEnyhLG1NLDrEMP0CPX2Qkr2TB4Ku0z7mMvMXOhqkDyYbPUShWICmk9X0rwToqb2BbOuWlE-ezCpXVKjDt462fob4Ax12nCicDi3o9JbFXvzbJvf3QXZ42EkIvxF1dOkdl_ejrkZokvQhgV8L9rTjXxB-qbWC1wV2nEaRgXoIGxYJt-K-AYbkXC1QmkKSwu4QljV2tn3fFBZ41IPsJPaWV3dMKm90rWYo-k3TmET_VfBOTgg9mT8b47emDCmhcIKCVaykcTw98_JFQCMP8scwIxD-V1bmA0HRrcC-45PBYDGf7gEVw40kSXQU/p.png',
    title: 'Custom Domain',
    desc: 'Use xircus custom domain or your own domains for personalized branding',
    bgColor: 'orange'
  },
]
const CardsCard = ({icon,title,desc,bgColor }) => (
  <Box bgColor={bgColor} {...cardsCardStyle.cardBox}>
    <Image src={icon} {...cardsCardStyle.imageIcon}/>
    <Heading {...cardsCardStyle.card}>{title}</Heading>
    <Text {...cardsCardStyle.cardText}>{desc}</Text>
  </Box>
)
export default function Cards() {
  return (
    <Box as="section" >
      <Container {...containerStyle.ConLg} centerContent>
        <Box >
          <Grid {...gridStyle.cardGridStyle}>
            {(CardsData || []).map((data, key) => (<CardsCard{...data}/>))}
          </Grid>
          </Box>
      </Container>
    </Box>
  );
}