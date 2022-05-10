/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import { forwardRef, memo, MutableRefObject, useEffect, useState } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Checkbox as ChakraCheckbox,
  InputGroup,
  Text,
} from '@chakra-ui/react'
import { CheckboxPropsInterface } from '@spikeform/types/input.type'

const Checkbox = forwardRef<HTMLInputElement, CheckboxPropsInterface>(
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
          <ChakraCheckbox
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

Checkbox.displayName = 'Checkbox'

export default memo(Checkbox)
