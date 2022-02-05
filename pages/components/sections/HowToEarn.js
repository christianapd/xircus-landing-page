import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, howToEarnCardStyle, gridStyle } from '../../../styles/globalStyle'
const takeFullControlData = [
  {
    title: 'As DAO',
    desc: 'Get early access on product , vip louge, newlatters, early opportunities, discount and membership rewards ',
    image: 'https://uca3bba99117e8a6d3d9626e757b.previews.dropboxusercontent.com/p/thumb/ABYkuLM2NGrSm_0Cb9xtqP_OQCrQOoAbuzBMFGJMh6xcWm6a7mzCZ5ad093Xb6Qum0QY1WcLWq1wtLAwB5sq07sOJKBWAEnvl5VLjyIG4i2Cm4aTtT9gGfgMVn3vyeTLrey60CcIIs9cE7Dmp-fxAgTwWxCEHHXMxWch6-wiKyVTKGjgVaCKESRH114OAYKmDHAZJLvXQxvAjltze7gjyT5UUgtMTEr4xeJOIYPF32PKzJ92pEZUozf5NJB4o5Rht1_YQ6WbDYsQBq3Rwkj9f72sCk0_KI2Sid5QvZEO7OF51G_M-mhDVIddc7ESYWmOErSbwpsy98SzrsBt4EB5C2iozZ1hf2o4nBtMNTFB27K343DdoXn8sAYCdU8kjhixQXQ/p.png'
  },
  {
    title: 'As Marketplace Owner',
    desc: 'Deploy your NFT marketplace, costumize your fees and themes, create staking opportunities for your costumers',
    image: 'https://ucf75788fd81c2b21d1c74ddfb2b.previews.dropboxusercontent.com/p/thumb/ABZMEh5th72Dhv-Rm4JLC-J6-NCJkpbJ_uTFsgxTJR7K9BVylAZdXlaWYTTZ4gG4nWe5YR6GNoYv9ysfB1_v-fvdjDYQcmdVKdLT6vVxsNAlnL8u_8g7EnSmH0LNCYdTp2nGAv8tka2Esz1kYnbgSoEIdTZ43iZ1d5-FXytCNiwm_oNOM3Y4jpajgYTFJdpBxVHS8S0p8OEl8tESVRC11STCbipUMeNwM1sz8-vQf49D2RHWieS4iK1gjh-fpGBmYQgvleTRz19TWmaJ4rMa423nF5jkGg5NetulIyvQ8kD2qRZ3x9mlip0Qp1NT7A9IBUGRRLb9NxIyFAQV2ooBhiQamqpqQR1DvxQhkJ9Z_IlzON4DFChd1ypUSejQBzb1wso/p.png'
  },
  {
    title: 'As Creator',
    desc: 'Mint your NFTs as $1 for listing/storage fee and 2.5% transaction fee for every purcase  ',
    image: 'https://uc54acb687e51592745486fbf653.previews.dropboxusercontent.com/p/thumb/ABY6YwoJRYVWdJkKBz_8KgyfUQMBpdtiSZXypbaJmtsp1sFQ-qCxmzjRz5ZKNxrAO_F7zc8L1STAtzB3cdQSNuVL6j9ecgEUyX8d5FrOM8edHv5y3YNBbQYqNzm8vJfcYcX-VOP3q8ZMstahBmU5xccLvk-hmnQaJXhB0YFeyzs9rN6ZoyyvJExzWpOYZa9P2AiXGIkJgH9EFbF1auWnMeYdU2bUjx7HfFbJNRvGcE7HRb68Wo2TWrZTsV0cgmkZHZOBZlDgWtMApe_zau0wiOzsNoQnmj3qPnjT717W9jJ9zwEVTICbxn1ATAiMSOPpRi3SfEvfz7CO0BI_Rks_xsn7aKdVT_YJg6qZ2XO8V0RfAP2uTAQpzSMfdIunMzNgc_U/p.png'
  },
  {
    title: 'As Provider',
    desc: 'Earn from deploying APIs to cached data for marketplace',
    image: 'https://uc9c1b002451c9de0027eb1f3755.previews.dropboxusercontent.com/p/thumb/ABaq-UgbCMfcB1qaAQQTGVsDj0Jn1L-wyT4TiK9kuMfsJjm9Be_osu4hClrZyHN7sOq43O2y7cIAUukkPUYs9SsMvyHt0CPCFTBY2d9D302DuXUOiiKufZVAiWWjVEoOTayj8sqLa3jZnxXTIUsOH9FXRGgUYZkwJ-vFOAM6skKlNVK6CfVv0XwbV7IajJUGfrH0cAD3__LZz4GZk54bjkTB6WrcT4Jpp6raAzhhMQh1FLI-5JBSqywvcfUcoHuFDVj8qhxFEyes96p0T8eeDhZRChV0-Exxujxmu1pw7tyD1CSK4_lPn2UNx24HemwLdzCwZzv2PnoTp6RPk9iunPa-fLGpdhzLJz-ytGMyPW7noKdhGgV1FqcqxWrp6dywlNE/p.png'
  },
  {
    title: 'As Collector',
    desc: 'Collect from different marketplace and manage collectibles via Xircus Mobile and Xircus TV apps',
    image: 'https://uc9405ee893371c29f5a217e2ef9.previews.dropboxusercontent.com/p/thumb/ABY_HSpV7Er8RMBx8OeyCnsDDJEiuCoxy1R2Ep8d-BRO4lEkE7PFyfRJSmx8TvMxgn5mAHXJZVtL-WhTJLtGIC7JweT0k1Ilf90_rHpsmJi1U5tt-QLvXgxUDNLY918WJSO1Rx3D1riM0795udoYUejHfZ03rR8TIGhqzKjgRvhT7EycDa8EfU3XBKYs1tiNRk4_LlXABLjABHc6vfHfYYSuKnAf5oGNpWP-SG0EOjpL4pGjxEPyUZBIbZXg590g7R83U80cIyQFZG_CVkaH4dEU0fBKZNpIJ8yiVecSJYeKzWlMPXHGLhGB-_3_vXjFnko8pdOtA2rSzdKO4jyrtNRRHpEOkk-LRNQ2-iX6DHJ_N7bi2IFD0NotqyRiw1noF9M/p.png'
  },
  {
    title: 'As Ambassador',
    desc: 'Earn from helping creators mint their creation',
    image: 'https://uc7b4abf498ccb7c7c4c06dcf28f.previews.dropboxusercontent.com/p/thumb/ABZHzgBn4QLD058vZl3cau3Lkkkb4ErvnQtQeKgXgADyf-ONcfk4SzDCGlNlmXgoO172uXaj5eFdT7bjF-P6tmhy6_ppwYbXdrRYflt0VUQESrkYxDKz0Qo7FdtzgvnXIZoyRqb1YexSTHR_N-Npshhsvj-H3IxPahVYUHd9ru9z8CNwYKbALmqwcY8tus3fe-L4YCkzK77MxLb-YFQDzaWcU9c4RNDaKCpfQon9b4kIBRuUn6FQBatA8__GT5IGEvBN7lenh54d0JLvWl3AbniPM3JvPDMGQS3S7Cr_IUt240zxtnNrtEASBrXiyrIZwtkVyImWokD5lJiOnQ2IG63TSDLyFRpWwwZ2cfS-7myXI7VXUTmbLZY71EMc42lSUR8/p.png'
  },

]
const HowToEarnCard = ({ image, title, desc }) => (
  <HStack {...howToEarnCardStyle.HowToEarnHStack} align="left" >
    <Image src={image} {...howToEarnCardStyle.imageIcon} />
    <Stack>
      <Heading {...howToEarnCardStyle.cardHeading}>
        {title}
      </Heading>
      <Text {...howToEarnCardStyle.cardText} >
        {desc}
      </Text>
    </Stack>
  </HStack>
)
export default function HowToEarn() {
  return (
    <Box as="section" color="white">
      <Container {...containerStyle.ConLg} centerContent>
        <Heading {...typoStyle.title}>How To Earn</Heading>
        <Text {...typoStyle.subtitle} mb="3%"> Unlesh the power of decentralized NFT marketplace</Text>
        <Box w="100%">
          <Grid {...gridStyle.howToEarnGridStyle}>
            {(takeFullControlData || []).map((data, key) => (<HowToEarnCard{...data} />))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}