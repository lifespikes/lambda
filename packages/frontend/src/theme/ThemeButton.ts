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
    },
    link: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
}
