import MobileNav from './mobile'
import DesktopNav from './desktop'
import LogoPng from '@/frontend/assets/images/logo.png'
import { Divider, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { NavLink } from '@/frontend/types/navbar'

import '@fontsource/rubik/300.css'

const TopBar = () => {
  return (
    <Stack w={'full'} py={4} px={6} bg={'brand.dark'}>
      <Flex w={'full'} justify='space-between'>
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
        <DesktopNav links={links} />
        <MobileNav links={links} />
      </Flex>
      <Divider />
    </Stack>
  )
}

export default TopBar

const links: NavLink[] = [
  { label: 'Task List', href: '/task-list' },
  { label: 'Performance', href: '/performance' },
  { label: 'Connections', href: '/connections' },
  { label: 'Tools', href: '/tools' },
]
