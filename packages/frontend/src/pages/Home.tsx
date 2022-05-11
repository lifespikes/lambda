import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { useAlert } from '@/frontend/hooks/useAlert'

const Home: FC = () => {
  const alert = useAlert()
  return (
    <>
      <h1>Hello World</h1>
      <Button onClick={() => alert.error({ title: 'pene' })}>Click me</Button>
    </>
  )
}

export default Home
