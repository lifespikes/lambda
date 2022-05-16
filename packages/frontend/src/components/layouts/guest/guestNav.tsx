import { NavLink } from '@/frontend/types/navbar'
import Logo from '@/frontend/components/logo'
import {
  NavContainer,
  NavDesktopLinks,
  NavMobileLinks,
} from '@/frontend/components/navbar'
const GuestNavbar = () => {
  return (
    <NavContainer>
      <Logo />
      <NavDesktopLinks links={links} />
      <NavMobileLinks links={links} />
    </NavContainer>
  )
}

export default GuestNavbar

const links: NavLink[] = [
  { label: 'Task List', href: '/task-list' },
  { label: 'Performance', href: '/performance' },
  { label: 'Connections', href: '/connections' },
  { label: 'Tools', href: '/tools' },
]
