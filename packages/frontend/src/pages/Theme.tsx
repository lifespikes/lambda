import {
  Box,
  Button,
  Code,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import Navbar from '@/frontend/components/navbar'

const Theme = () => {
  return (
    <>
      <Navbar />
      <Stack p={10}>
        <Heading>Colors</Heading>
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
    </>
  )
}

export default Theme

const colors = [
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
