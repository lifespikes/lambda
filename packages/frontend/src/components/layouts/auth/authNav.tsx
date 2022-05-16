import { HStack } from '@chakra-ui/react'
import { NavLink } from '@/frontend/types/navbar'
import Logo from '@/frontend/components/logo'
import {
  NavAvatar,
  NavContainer,
  NavDesktopLinks,
  NavMobileLinks,
} from '@/frontend/components/navbar'

const AuthNavbar = () => {
  return (
    <NavContainer>
      <HStack spacing={4}>
        <Logo />
        <NavDesktopLinks links={links} />
      </HStack>
      <HStack>
        <NavAvatar />
        <NavMobileLinks links={links} />
      </HStack>
    </NavContainer>
  )
}

export default AuthNavbar

const links: NavLink[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Task List', href: '/task-list' },
  { label: 'Performance', href: '/performance' },
  { label: 'Connections', href: '/connections' },
  { label: 'Tools', href: '/tools' },
]
