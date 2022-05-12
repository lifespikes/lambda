export const ThemeButton = {
  variants: {
    primary: {
      bg: 'brand.primary',
      color: 'whiteAlpha.900',
      _hover: {
        bg: 'brand.softPrimary',
      },
    },
    secondary: {
      bg: 'brand.secondary',
      color: 'whiteAlpha.900',
      _hover: {
        bg: 'brand.softSecondary',
      },
    },
    dark: {
      bg: 'brand.dark',
      color: 'whiteAlpha.900',
      _hover: {
        bg: 'brand.softDark',
      },
    },
    special: {
      bg: 'brand.dark',
      color: 'whiteAlpha.900',
      border: '1.5px solid #fff',
      _hover: {
        bg: 'brand.softDark',
      },
      _active: {
        bg: 'brand.dark',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    link: {
      fontWeight: 'hairline',
      color: 'white',
      fontSize: 'sm',
      _active: {
        color: 'gray.300',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
  },
}
