import { HStack, Image, Text } from '@chakra-ui/react'
import LogoPng from '@/frontend/assets/images/logo.png'

const Logo = () => {
  return (
    <HStack spacing={{ base: 2, lg: 4 }}>
      <Image w={{ base: 8, lg: 50 }} src={LogoPng} />
      <Text
        fontFamily={'Rubik'}
        fontSize={{ base: '1rem', lg: '2rem' }}
        fontWeight='bold'
        color={'white'}
      >
        lambda
      </Text>
    </HStack>
  )
}

export default Logo
