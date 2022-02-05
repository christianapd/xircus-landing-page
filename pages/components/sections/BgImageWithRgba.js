import { Box } from '@chakra-ui/react';
export default function BgImageWithRgba() {
  return (
    <Box as="section" bgColor="blue">
      <Box bgImage="url('https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20191219155939/iStock-1135152732.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
        w="100%"
        zIndex='-2'
        position="absolute">
        <Box  h="100vh"
        w="100%"
        bgGradient="linear(to-b, rgba(0,0,0,0.1),rgba(0,0,0,0.3), rgba(0,0,0,1))">
        </Box>
      </Box>
    </Box>
  );
}