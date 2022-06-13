import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { useAlert } from '@/frontend/hooks/useAlert'
import {
  Box,
  Input,
  Heading,
} from '@chakra-ui/react';

const Login: FC = () => {
  const alert = useAlert()

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    post(route('login.store'));
  };

  const {setData, post, processing, errors} = inertiaForm;

  return (
    <form onSubmit={onSubmit}>
      <Heading as="h1" size="lg" fontWeight="600">
        Sign in to your account
      </Heading>
      <Input
        id="email"
        type="email"
        name="email"
        //value={inertiaForm.data.email}
        placeholder="Your email"
        labelText="Email"
        size="md"
        variant="filled"
        //errorText={errors.email}
        //onChange={onHandleChange}
      >
      </Input>
        <Box mt={4}>
          <Input
            id="password"
            type="password"
            name="password"
            //value={inertiaForm.data.password}
            placeholder="Your Password"
            labelText="Password"
            size="md"
            variant="filled"
            //errorText={errors.password}
            //onChange={onHandleChange}
          />
        </Box>
      <Button
        mt={4}
        isLoading={processing}
        type="submit"
        variant="primary"
        width="100%"
        fontWeight="light"
      >
        Sign In
      </Button>
    </form>
  )
}

export default Login
