/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, {
  forwardRef,
  memo,
  MutableRefObject,
  useEffect,
  useState,
} from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
} from '@chakra-ui/react'
import { DatePickerPropsInterface } from '../types/input.type'
import { default as ReactDatePicker } from 'react-datepicker'

const DatePicker = forwardRef<HTMLInputElement, DatePickerPropsInterface>(
  (
    {
      errorText,
      labelText,
      helperText,
      id,
      onBlur,
      onFocus,
      onChange,
      isRequired = false,
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
        <FormLabel htmlFor={id}>
          {labelText}{' '}
          {isRequired ? (
            <Text as='span' fontSize='sm' color='red.500' fontWeight='bold'>
              *
            </Text>
          ) : null}
        </FormLabel>
        <ReactDatePicker
          id={id}
          onChange={onChange}
          onBlur={(event) => {
            setIsFocused(false)
            onBlur?.(event)
          }}
          onFocus={(event) => {
            setIsFocused(true)
            onFocus?.(event)
          }}
          required={isRequired}
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

DatePicker.displayName = 'DatePicker'

export default memo(DatePicker)
