import { Button, HStack } from '@chakra-ui/react'
import { FC } from 'react'
import { NavMenuProps } from '@/frontend/types/navbar'

const DesktopNav: FC<NavMenuProps> = (props) => {
  const { links } = props
  return (
    <HStack display={{ base: 'none', lg: 'flex' }} spacing={14}>
      <HStack spacing={4}>
        {links.map((link) => (
          <Button key={link.label} variant={'link'}>
            {link.label}
          </Button>
        ))}
      </HStack>
      <Button variant={'special'} size='xs' minW={'130px'}>
        Sign Up
      </Button>
    </HStack>
  )
}

export default DesktopNav
