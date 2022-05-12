import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { FC, useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavMenuProps } from '@/frontend/types/navbar'

const MobileNav: FC<NavMenuProps> = (props) => {
  const { links } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <IconButton
        onClick={onOpen}
        bg='brand.dark'
        color={'white'}
        aria-label='hamburger'
        icon={<HamburgerIcon />}
        display={{ base: 'inherit', lg: 'none' }}
        _hover={{ bg: 'brand.dark' }}
      />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'brand.dark'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader>
            <Text color={'white'}>Menu</Text>
          </DrawerHeader>
          <DrawerBody>
            <Flex>
              <Stack spacing={10}>
                <Stack spacing={2}>
                  {links.map((link) => (
                    <Button
                      onClick={onClose}
                      justifyContent={'left'}
                      key={link.label}
                      variant={'link'}
                      fontSize='xl'
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Flex>
          </DrawerBody>
          <DrawerFooter justifyContent={'left'}>
            <Button w={'full'} size={'sm'} variant={'secondary'}>
              Sign up
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNav
