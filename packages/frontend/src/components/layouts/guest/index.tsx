import { FC } from 'react'
import { WithChildren } from '@/frontend/types/common.type'
import { Box, Stack } from '@chakra-ui/react'
import GuestNavbar from './guestNav'

const GuestLayout: FC<WithChildren> = (props) => {
  return (
    <>
      <GuestNavbar />
      <Stack
        color={'white'}
        position={'relative'}
        py={5}
        px={{ base: 5, lg: 28 }}
      >
        <Box
          bg={'brand.dark'}
          w='full'
          h='30vh'
          left={0}
          top='0'
          pos={'absolute'}
          zIndex={-1}
        />
        {props.children}
      </Stack>
    </>
  )
}

export default GuestLayout
