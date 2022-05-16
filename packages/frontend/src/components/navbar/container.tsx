import { Divider, Flex, Stack } from '@chakra-ui/react'
import { NavLink } from '@/frontend/types/navbar'

import { FC } from 'react'
import { WithChildren } from '@/frontend/types/common.type'
import '@fontsource/rubik/300.css'

const NavbarContainer: FC<WithChildren> = (props) => {
  return (
    <Stack w={'full'} py={2} px={6} bg={'brand.dark'}>
      <Flex w={'full'} justify='space-between' align={'center'}>
        {props.children}
      </Flex>
      <Divider />
    </Stack>
  )
}

export default NavbarContainer
