/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import { forwardRef, memo, MutableRefObject, useEffect, useState } from 'react'
import {
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input as ChakraInput,
} from '@chakra-ui/react'
import { InputPropsInterface } from '@spikeform/types/input.type'

const Input = forwardRef<HTMLInputElement, InputPropsInterface>(
  (
    {
      type = 'text',
      errorText,
      labelText,
      helperText,
      id,
      value,
      onBlur,
      onFocus,
      onChange,
      isRequired,
      InputContent,
      ...restOfProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    useEffect(() => {
      if (isFocused) {
        ;(ref as MutableRefObject<HTMLInputElement>).current?.focus()
      }
    }, [])

    const onShowPassword = () => {
      setShowPassword(!showPassword)
    }

    if (type === 'password') {
      return (
        <FormControl isInvalid={!!errorText} {...restOfProps}>
          <FormLabel
            htmlFor={id}
            display={labelText !== false ? 'block' : 'none'}
            textColor={'gray.600'}
          >
            {labelText}{' '}
            {isRequired ? (
              <Text as='span' fontSize='sm' color='red.500' fontWeight='bold'>
                *
              </Text>
            ) : null}
          </FormLabel>
          <InputGroup size='md'>
            <ChakraInput
              ref={ref}
              id={id}
              borderColor={'gray.300'}
              type={showPassword ? 'text' : 'password'}
              value={value}
              onBlur={(event) => {
                setIsFocused(false)
                onBlur?.(event)
              }}
              onFocus={(event) => {
                setIsFocused(true)
                onFocus?.(event)
              }}
              onChange={onChange}
              isRequired={isRequired}
              pr='4.5rem'
              {...restOfProps}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={onShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errorText ? (
            <FormErrorMessage>{errorText}</FormErrorMessage>
          ) : (
            <FormHelperText>{helperText}</FormHelperText>
          )}
        </FormControl>
      )
    }

    return (
      <FormControl isInvalid={!!errorText}>
        <FormLabel
          htmlFor={id}
          display={labelText !== false ? 'block' : 'none'}
        >
          {labelText}{' '}
          {isRequired ? (
            <Text as='span' fontSize='sm' color='red.500' fontWeight='bold'>
              *
            </Text>
          ) : null}
        </FormLabel>
        <InputGroup>
          <ChakraInput
            ref={ref}
            borderColor={'gray.300'}
            type={type}
            id={id}
            value={value}
            onBlur={(event) => {
              setIsFocused(false)
              onBlur?.(event)
            }}
            onFocus={(event) => {
              setIsFocused(true)
              onFocus?.(event)
            }}
            onChange={onChange}
            isRequired={isRequired}
            {...restOfProps}
          />
          {InputContent ? InputContent : null}
        </InputGroup>
        {errorText ? (
          <FormErrorMessage>{errorText}</FormErrorMessage>
        ) : (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
    )
  }
)

Input.displayName = 'Input'

export default memo(Input)
