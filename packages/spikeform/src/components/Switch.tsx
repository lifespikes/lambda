/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useState,
  memo,
} from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Switch as ChakraSwitch,
  Text,
} from '@chakra-ui/react'
import { SwitchPropsInterface } from '@spikeform/types/input.type'

const Switch = forwardRef<HTMLInputElement, SwitchPropsInterface>(
  (
    {
      errorText,
      labelText,
      helperText,
      id,
      value,
      onBlur,
      onFocus,
      onChange,
      isRequired,
      ...restOfProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    useEffect(() => {
      if (isFocused) {
        ;(ref as MutableRefObject<HTMLInputElement>).current?.focus()
      }
    }, [])

    return (
      <FormControl isInvalid={!!errorText} w={'100%'}>
        <FormLabel htmlFor={id}>
          {labelText}{' '}
          {isRequired ? (
            <Text as='span' fontSize='sm' color='red.500' fontWeight='bold'>
              *
            </Text>
          ) : null}
        </FormLabel>
        <ChakraSwitch
          w={'100%'}
          ref={ref}
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
        {errorText ? (
          <FormErrorMessage>{errorText}</FormErrorMessage>
        ) : (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
    )
  }
)

Switch.displayName = 'Switch'

export default memo(Switch)
