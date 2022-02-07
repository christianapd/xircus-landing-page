import { Box, Container, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { typoStyle, containerStyle, takeFullControlCardStyle, boxStyle, gridStyle } from '../../../styles/globalStyle'

const takeFullControlData = [
  {
    icon: 'https://ucc8bfa1e06c0f3a77b96b46d7d6.previews.dropboxusercontent.com/p/thumb/ABYchZg0KYULBN0pTC7R-LGflbzJO4n8iCaETsXGR-kV_e4nTeVoWF2y7gWexpI0uEdeAFuk-Wki_ywZSVWb1ExGpKKmOwCxuUZzCObor9RZ_fnsLpqZaHonbccXYA6EKqsq_aw61XAiO3W5tHeuPHfAj4SunLYuZho5M9DXW2UyExdVr4NiYwVV5TWwuUXr9sUT5tBRvIsZNWicF73Q2_uoZtT8UNDAZ-aKrN-4a8zWMTIfCFjP9aFMKkZ23NKIlBb61NT8h4pf5yylUpR17za7vq4EcYCyea2MtTFGXwo_7SlV2YAfvK4ULoK0fmUujkHAgoZ297S8Flp78XDHLp2y7qTIMRCJ-Z86nMXLMVr1Z2IgN0ZYE5-sqBGPnvbrc2E/p.png',
    text: 'Deploy on multiple blockchain protocols'
  },
  {
    icon: 'https://uc7aa05c68db33b675d746b172fa.previews.dropboxusercontent.com/p/thumb/ABbaGPWI1c4nmDZ7h_k_Ea7lwPctEcuhMa8SYtEujzMf3Biyakd5XI2eTJQJEiMQ_piaxWDEyQFOWrKtNwvYVUJKxA7a6mV4qd7gX8xvQw3TN_H_PtuXakLGhkGkrofAUKpDx2ZRM5B8T2c2-2TN4hDl7r1LLgW8WTS6mSYxH_uWXWSkrsgjgO9qO9hf0_6JRoUFJlWGLgFaGCnE3eQuZEawgc5BRkvsSNpF5zU61ezWmyyVpoQfYDa1vqPkWGsH2yDn6tcgEB8ttclt5384nhHiQyUcpLGucKxg9qysiBodTXu7ONPZe_jhQV_9srB3IazFbPAs5L163IcAl_7_WiLfHxEBXV1IUvrrUHxVQiq9s-9owQbHxaYExIUDFL1TUus/p.png',
    text: 'Accept tokens as payment for NFTs'
  },
  {
    icon: 'https://uc703f9eea3c8b3f2b8fced44521.previews.dropboxusercontent.com/p/thumb/ABZw2td-xzhBtAv_6YIHmzYNGMOPV9oAE4Mu5LVU9vOSOF2FzOEHizVeF4tCozN1tZnXQ6EKvOsV83LthkWWkhGc84FnBG_YV7Z3O-ZENXOaXo1ZbJkuuIc063X5gjyuj7c1SMkH4PpgOCV1fgPN7oBmCAYsveh6Shmp_ftL9BCB-zxyZjL9sCLnuGBjGZEF1Om9RTqmze7Gx5MdIKAq79JmrimiEfqf1pyV_ckeWZCdITs9jmVO2-3pFTU7Q1BaXRuo3wKG_7NANVh803pcRwM-2SoGCaDqhlbdy-7iTvRx19NiemIXWiVi-SFjjlbZONSxCoDA1yFaR2oz0LABs_GdRXYcBvmNdwXnXY0qd5BCMCzHUvfcgiqTw0N0imnJT54/p.png',
    text: 'Configure with any decentralized exchange'
  },
  {
    icon: 'https://ucbfe794b0a472ce676559a66d44.previews.dropboxusercontent.com/p/thumb/ABYNEedsHcKn7VolZ96Bl2tkvtvOr-bCuj1bQsdFnt2vLI6Y-8YYCAzf6RuI4kwDWt0H5iUwHzjCP2WsecVUSRgSknvcUmcVsn11VYPtsCRr4iJR4Q_VaPiUxvAqUD6DyxTKIscvnPTmB3ZYJa9HL42Lfi3tdEtC8BcdXYYX4crs3IF1cpQvqLTu_impdHeaUi7JNgM8tpydM4-KXR97RldKV5T8sMz6Ccgcv4YY6HABEHGJh6ONoZ7APws4hZQQSdl_YIGbcuRqfN0l3t9mHXLRl3HSyB3cp0DcY_vGBF1TUqbqN7U8LaMl5jPqLbfp0tLr0Szu7aG717z4tOJNVk1kJNVA_4u4La1iSxWbI6JyFSG-fI5f-4DyKYeaROnAgHY/p.png',
    text: 'Deploy and manage multiple collections'
  }
]
const TakeFullControlCard = ({icon,text, Translate }) => (
  <Box {...takeFullControlCardStyle.outerBox}>
    <Box {...takeFullControlCardStyle.wrapperBox}>
      <Image src={icon} {...takeFullControlCardStyle.imageIcon} />
      <Text {...takeFullControlCardStyle.cardText}>{Translate(text)}</Text>
    </Box>
    <Box {...takeFullControlCardStyle.absuluteBox} />
  </Box>
)

export default function TakeFullControl({translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl}  centerContent>
        <Heading {...typoStyle.title}>{translate('Take')}</Heading>
        <Text {...typoStyle.subtitle}>{translate('Built')}</Text>
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