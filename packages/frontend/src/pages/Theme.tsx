import {
  Box,
  Button,
  ButtonSpinner,
  Code,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import SpikeButton from '../components/SpikeButton'

const Theme = () => {
  return (
    <Stack p={10}>
      <Heading>Colors</Heading>
      <HStack>
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
      </HStack>
      <Heading>Buttons</Heading>
      <Text fontSize='12px' fontWeight={'bold'}>
        The Variant Special button has a white border, but it is unnoticeable
        here.
      </Text>
      <HStack>
        <Button variant={'primary'}>Variant Primary</Button>
        <Button variant={'secondary'}>Variant Secondary</Button>
        <Button variant={'dark'}>Variant Dark</Button>
        <Button variant={'special'}>Variant Special</Button>
        <Button>Default</Button>
        <Button variant={'link'}>Variant Link</Button>
      </HStack>
    </Stack>
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
