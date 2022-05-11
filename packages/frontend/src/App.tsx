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
      <ChakraProvider theme={theme}>
        <App {...setupProps}>
          {({ Component, props, key }) => (
            <Wrapper>
              <Component {...props} key={key} />
            </Wrapper>
          )}
        </App>
      </ChakraProvider>
    )
  },
})
