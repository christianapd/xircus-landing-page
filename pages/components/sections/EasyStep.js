import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button,Tabs,Tab,TabPanel,TabPanels,TabList } from '@chakra-ui/react';
import { typoStyle, containerStyle, boxStyle, buttonStyle, imageStyle, colorStyle } from '../../../styles/globalStyle'


export default function EasySptep({easyStepData, translate}) {
  return (
    <Box as="section" {...boxStyle.easyStepBoxStyle}>
      <Container {...containerStyle.conXl} {...colorStyle.primary} centerContent>
        <Heading {...typoStyle.title}>{translate('Easy')}</Heading>
        <Tabs  align='center'  variant="unstyled">
          <TabList>
            {easyStepData.map((tab, index) => (
              <Tab{...buttonStyle.EasyStepButton} key={index}>{translate(tab.label)}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {easyStepData.map((tab, index) => (
              <TabPanel p={4} key={index}>
                <Image src={tab.image} {...imageStyle.easyStepImageStyle} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}