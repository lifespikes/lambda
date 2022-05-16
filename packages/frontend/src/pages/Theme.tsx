import {
  Box,
  Button,
  Code,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import GuestLayout from '@/frontend/components/layouts/guest'

const Theme = () => {
  return (
    <GuestLayout>
      <Stack p={10}>
        <Heading>Colors</Heading>
        <Text fontSize={'xs'}>
          <Code fontSize={'xs'}>brand.offWhite</Code> it's barely noticeable
          here. But it's useful for things like backgrounds, borders or cards.
        </Text>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          {colors.map((c) => (
            <HStack key={c.value}>
              <Code>brand.{c.value}</Code>
              <Box
                backgroundColor={`brand.${c.value}`}
                height='50px'
                width='50px'
                borderRadius='50%'
              />
              <Divider borderColor='brand.dark' orientation='vertical' />
            </HStack>
          ))}
        </Stack>
        <Heading>Buttons</Heading>
        <Text fontSize='12px' fontWeight={'bold'}>
          The Variant Special button has a white border, but it is unnoticeable
          here.
        </Text>
        <Text fontSize='12px' fontWeight={'bold'}>
          The Variant Link button has white font color by default, it is wrapped
          within a Box with brand.dark bg for demonstration purposes.
        </Text>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Button variant={'primary'}>Variant Primary</Button>
          <Button variant={'secondary'}>Variant Secondary</Button>
          <Button variant={'dark'}>Variant Dark</Button>
          <Button variant={'special'}>Variant Special</Button>
          <Button>Default</Button>
          <Box bg={'brand.dark'} p='2'>
            <Button variant={'link'}>Variant Link</Button>
          </Box>
        </Stack>
      </Stack>
    </GuestLayout>
  )
}

export default Theme

const colors = [
  {
    value: 'offWhite',
  },
  {
    value: 'primary',
  },
  {
    value: 'secondary',
  },
  {
    value: 'dark',
  },
]
