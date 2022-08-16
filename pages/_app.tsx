import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
  import MyLayout from 'components/layouts/MyLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
