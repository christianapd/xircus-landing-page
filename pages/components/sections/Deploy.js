import { Box, Container, Flex, Grid, Heading, HStack, Image, Text, VStack, Stack, Button, Spacer } from '@chakra-ui/react';
import { typoStyle, containerStyle, HStackStyle,buttonStyle, imageStyle } from '../../../styles/globalStyle'


export default function Deploy({translate}) {
  return (
    <Box as="section" >
      <Container {...containerStyle.conXl} centerContent>
        <HStack>
          <VStack spacing={0}>
            <Button {...buttonStyle.DeployButton} bgColor="red" >{translate('General')}</Button>
            <Button {...buttonStyle.DeployButton}>{translate('Music')}</Button>
            <Button {...buttonStyle.DeployButton}>{translate('Short')}</Button>
            <Button {...buttonStyle.DeployButton}>{translate('Game')}</Button>
            <Button {...buttonStyle.DeployButton}>{translate('Adult')}</Button>
            <Button {...buttonStyle.DeployButton}>{translate('Fan')}</Button>
            <Button {...buttonStyle.DeployButton}>{translate("Subcription")}</Button>
            <Button {...buttonStyle.DeployButton}>{translate("10k")}</Button>
          </VStack>
          <Spacer/>
          <Box>
            <Image {...imageStyle.deployImageStyle}src="https://uc3e07410a17014ba4e87c8ba5bc.previews.dropboxusercontent.com/p/thumb/ABYEsK3aLUZD14uxplUdLqvHqiJgFRV1p1d1qO_NEJSOYwYRaxJBh9vG7deXl32yI54_SDtn7hVmyACnIXLddrSqNe1XS2u21Is6UrU6uEHsExkRRaWsrR9n9-W3lLfNqJJjRsJpCIKE3LuuC8vGOj2SHh7v_USA_6rkiXE9rD4GM8PeM41oO7RZmIVs_-0q3KN2dNt-D84uZvdKDoyKtmdbJtWdLDSRtwbRlPSgQZ5qSGaU8KeV1xIJ7FnmnqZd2bV7SgA0Pui8EqhxLM-V2nRm6SUAIR5J0frwutPklrrZHWujs1oZ9iL6et9_3kuErx4hfhsKs3Oab2j6G4S86BkIf5kk_GtMMWR9_KKEANIaCnf4XzUzMCiJSs8tN0sKWy8/p.png" />
          </Box>


        </HStack>

      </Container>
    </Box>
  );
}