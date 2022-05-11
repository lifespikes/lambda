/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import { forwardRef, memo, MutableRefObject, useEffect, useState } from 'react'
import {
  Text,
  Select as ChakraSelect,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react'
import { SelectPropsInterface } from '@spikeform/types/input.type'

const Select = forwardRef<HTMLSelectElement, SelectPropsInterface>(
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
        ;(ref as MutableRefObject<HTMLSelectElement>).current?.focus()
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
        <ChakraSelect
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

Select.displayName = 'Select'

export default memo(Select)
