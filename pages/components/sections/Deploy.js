import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle, buttonStyle, imageStyle, colorStyle } from '../../../styles/globalStyle'


export default function Deploy({ deployData, translate }) {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl} {...colorStyle.primary} >
        <Heading {...typoStyle.title} mb="3%">{translate('title')}</Heading>
        <Tabs orientation="vertical" isFitted variant='enclosed' variant="unstyled">
          <Stack direction={{ base: 'column', sm: 'column', md: 'row' }}>
          <TabList>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }} gap="2">
            {deployData.map((tab, index) => (
              <Tab{...buttonStyle.DeployButton} key={index}>{translate(tab.label)}</Tab>
            ))}
            </Grid>
          </TabList>
          <TabPanels>
            {deployData.map((tab, index) => (
              <TabPanel p={4} pt={0} key={index}>
                <Image src={tab.image} fallbackSrc="https://via.placeholder.com/650" w="100%" />
              </TabPanel>
            ))}
          </TabPanels>
          </Stack>
        </Tabs>
      </Container>
    </Box>
  )
}