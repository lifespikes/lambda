import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export default extendTheme(
  withDefaultColorScheme({
    colorScheme: 'primary',
    components: ['Button', 'Checkbox']
  }),
  {
    fonts: {
      heading: 'Poppins',
      body: 'Poppins'
    },
    fontWeights: {
      bold: 600
    }, // TODO: change the theme
    colors: {
      primary: {
        50: '#d9fcff',
        100: '#aeedff',
        200: '#80e0fb',
        300: '#50d3f8',
        400: '#24c6f5',
        500: '#0aaddb',
        600: '#0086ac',
        700: '#00607c',
        800: '#003b4c',
        900: '#00151e'
      }
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
          900: '#00151e'
        }
      }
    },
    styles: {
      global: {
        'html, body': {
          color: 'gray.700',
          fontSize: 'md'
        }
      }
    }
  }
)
