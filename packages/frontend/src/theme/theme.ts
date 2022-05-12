import { extendTheme } from '@chakra-ui/react'
import { ThemeButton } from './ThemeButton'

export default extendTheme({
  components: {
    Button: ThemeButton,
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    brand: {
      primary: '#232189',
      softPrimary: '#2a28a4',
      secondary: '#5c59e7',
      softSecondary: '#6563e9',
      dark: '#1F2937',
      softDark: '#2e3d52',
    },
  },
  semanticTokens: {
    colors: {
      primary: {
        default: '#0AAAD8',
        50: '#d9fcff',
        100: '#aeedff',
        200: '#80e0fb',
        300: '#50d3f8',
        400: '#24c6f5',
        500: '#0aaddb',
        600: '#0086ac',
        700: '#00607c',
        800: '#003b4c',
        900: '#00151e',
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.700',
        fontSize: 'md',
      },
    },
  },
})
