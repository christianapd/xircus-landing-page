import { Box, Button, Circle, Container, Heading, HStack, Image, Text, Stack, Flex, Spacer, Grid, Center } from '@chakra-ui/react';
import { typoStyle, buttonStyle, containerStyle, stackStyle } from '../../../styles/globalStyle'
import { FaPlay } from "react-icons/fa";

const asSeenOnImages = [
  {
    icon: 'https://uccc4493c798d19bba2b70cdef71.previews.dropboxusercontent.com/p/thumb/ABYVqjxlZBHtLT37IGGcFx519zPMn2f-cW33G2gr0BUuk99OEsEV-GWolA_cvpFBvqxYtcq9Yhvj-S7GbsVvuIiuckbYDPO94QV6lrLbJiESTUdtWpEr9w01pBNaEQyIgz0IyrPwPT6ZwM6p2z__6HSgqQwjWn7_2mHSSkp7IR2etbP2eFXmJJ9bwhkR0QHjDl5RasuTIaenswLQkCEeBwdkyNVddkbu3trSki7-CzE9QSYY6H6lit_gMSwyFrbRHjx7FlXeiDUOy70w9vsjA78ubCUmmI0wN6aPGOXLBLEWAWJ71lLfXRMPftwNBJa5CcQG22xAScbOyO5IsPxbrQzzlTRDBaedKu-AEebgxQ9Ug2q8KgA399qRTYhOIb14vhQ/p.png',
  },
  {
    icon: 'https://uc230d91df6a10725c1e611eb222.previews.dropboxusercontent.com/p/thumb/ABasJRb4S04hKcWOPo_0Mj070djYt9LojsCbO0Mg6qc8r8CoC-7rZp64KD6F6RYltbz84CRuPqpjDxkJeeJ6rXfh2FNusK8UNR0rMLYZT9SrpT7DbKI_DmdtHHZFBtHi7JPTlYwmx3oXXmBSdbkBmMT6RS9h0arMuFfsibUsTlr9LMCascwnRVyDveWYS9kkrvEkFD4AoqTRbBja4mfZH7kBXKQle5u4H5NHHKHFBif_DRQwmb5VZWottOeQEkCIs4ojtOBkYfNMRtSf8XJ1fqMXfTv19UWjDZFhwA5E-d6NJqzES_UlgyUQAECIraLd_F7HP9t280INLOtnWThJb_LvuBjNteZiux9UH4A2AukVf5HZMKoNLt0b05rLWzham-k/p.png',
  },
  {
    icon: 'https://uce582359bae92e2b940d1aa0262.previews.dropboxusercontent.com/p/thumb/ABZ1t1pD1Qq2TF8jqAviT5mcYFWBYeVcPd2Rs1u1FAhwi14avCH31il55PWQdVjIifFXpkGMWPGCCAwUpjYzDjmW3hsBEMblBv-pWtyDE4kMGDcY6xeCiH8-zUY8yV7Aq8PDO_dK0gMAXDLOqtWmqnmyU728Ip1mzQ-FpQRWFWDXI0KP5erVAX1p7CbQGJTT0yhF5itF6i2tIweUtI_qAz1Wf3FDBOmAgKRSVPqHtOepdAlni-0oTcDP1Hbe6taPZ7HPkKdbrkuU3R6hJnMhhPMFZdu3HMUX19wszHxIJnfm_R10KkyPgGwzcu9V4p0BsvvzBZjmFf5muuzAf9GmlQxJ9C32uzaWIqkfSeJXsHxdrijoc3bpmRtClB951Qc8ijY/p.png',
  },
  {
    icon: 'https://www.benzinga.com/sites/all/themes/bz2/images/footer/Benzinga_Logo_web-03.png',
  },
  {
    icon: 'https://www.nicepng.com/png/full/132-1327083_leave-a-reply-0-comments-digital-journal-logo.png'
  }
]
const Icons = ({ icon }) => (
  <Center>
    <Image src={icon} w="150px" fallbackSrc="https://via.placeholder.com/150x50png?" />
  </Center>

)

export default function Hero() {
  return (
    <Box as="section">
      <Container {...containerStyle.ConLg} mt="10px" centerContent>
        <Image src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" h="70px" placeholder='https://via.placeholder.com/70' />
        <Heading {...typoStyle.headline}>XIRCUS</Heading>
        <Heading {...typoStyle.headline}>Start your NFT business today !</Heading>
        <Heading {...typoStyle.subheadline}>Deploy your customizable NFT marketplace in minutes bundled with awesome features</Heading>
        <Circle as="button" {...buttonStyle.heroPlayButton}><FaPlay color="red" /></Circle>
        <HStack mb="15%">
          <Button {...buttonStyle.heroButton}>
            Deploy Marketplace
          </Button>
          <Box as="button" {...buttonStyle.heroButton} >
            <Text>Get XircusPunks for </Text>
            <Text>Early Access</Text>
          </Box>
        </HStack>
        <Stack {...stackStyle.heroAsSeenOnstackStyle}>
          <Heading {...typoStyle.asSeenOn}>As Seen On</Heading>
          {(asSeenOnImages || []).map((link) => (<Icons{...link} />))}
        </Stack>
      </Container>
    </Box>
  )
}