import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  Avatar,
  Stack,
  Text,
  HStack,
  Divider,
} from '@chakra-ui/react'
import thumbnail from '@/frontend/assets/images/avatarThumbnail.png'
import { BiLogOut } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import { GiCycle } from 'react-icons/gi'
import { GrUpgrade } from 'react-icons/gr'

const NavbarAvatar = () => {
  const Triger = PopoverTrigger as any

  return (
    <Popover>
      <Triger>
        <Avatar cursor={'pointer'} size={'sm'} src={thumbnail} />
      </Triger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Stack>
            <HStack>
              <Avatar src={thumbnail} />
              <Stack spacing={0}>
                <Text fontWeight={'black'}>John Doe</Text>
                <Text>Plan: Platinum</Text>
              </Stack>
            </HStack>
            {options.map((option) => (
              <HStack
                key={option.label}
                cursor={'pointer'}
                _hover={{ bg: 'brand.offWhite' }}
              >
                <option.icon fontSize={'22px'} />
                <Text>{option.label}</Text>
              </HStack>
            ))}
            <Divider />
            <HStack cursor={'pointer'} _hover={{ bg: 'brand.offWhite' }}>
              <BiLogOut color='red' />
              <Text color={'red'}>Logout</Text>
            </HStack>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NavbarAvatar

const options = [
  { icon: IoMdSettings, label: 'Settings' },
  { icon: GiCycle, label: 'Billing' },
  { icon: GrUpgrade, label: 'Upgrade' },
]
