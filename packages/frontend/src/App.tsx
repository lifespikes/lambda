import React from 'react'
import { simpleInertiaApp } from '@lifespikes/js-beam'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import theme from '@/frontend/theme/theme'

import { useFlashSessionAlerts } from '@/frontend/hooks/useFlashSessionAlerts'


const Wrapper: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  useFlashSessionAlerts()
  return <>{children}</>
}

void simpleInertiaApp({
  pages: import.meta.glob('./pages/**/*.tsx'),
  setup({ el, App, props: setupProps }) {
    const root = createRoot(el)
    root.render(
     <App {...setupProps}>
        {({ Component, props, key }) => (
          <ChakraProvider theme={theme}>
            <Wrapper>
              <Component {...props} key={key} />
            </Wrapper>
          </ChakraProvider>
        )}
      </App>
    )
  },
})
