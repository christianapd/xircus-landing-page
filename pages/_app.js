import { ChakraProvider } from '@chakra-ui/react'
import {NextIntlProvider} from 'next-intl';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </NextIntlProvider>
  )
}

export default MyApp
