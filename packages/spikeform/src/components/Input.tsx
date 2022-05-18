/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { Consumer } from 'react'
import {
  SFData,
  SpikeFormContext,
  SpikeFormControl,
} from '@spikeform/types/spikeform.type'
import { SpikeContext } from '@spikeform/components/SpikeForm'
import AppInput from '@spikeform/components/AppInput'
import { toTitle } from '@spikeform/utils/common'
import { InputPropsInterface } from '@spikeform/types/input.type'

const Input = <T extends SFData<T>>({
  label,
  required = true,
  name,
  ...props
}: InputPropsInterface & SpikeFormControl<T>) => {
  const FormConsumer = SpikeContext.Consumer as Consumer<SpikeFormContext<T>>

  const guessedType = (() => {
    if (name.indexOf('number') > -1) {
      return 'number'
    }

    if (name.indexOf('email') > -1) {
      return 'email'
    }

    return 'text'
  })()

  return (
    <FormConsumer>
      {({ data, errors, setData, __spk, clearErrors }) => (
        <AppInput
          value={data[name]}
          id={name}
          type={guessedType}
          labelText={label ?? toTitle(name)}
          size={props.size ?? 'md'}
          isRequired={required}
          errorText={errors?.[name] ?? undefined}
          onFocus={() => __spk.touch(name)}
          onBlur={() => __spk.blur(name)}
          onChange={({ target: { value } }) => {
            clearErrors(name)
            setData({ ...data, [name]: value })
          }}
          {...props}
        />
      )}
    </FormConsumer>
  )
}

export default Input
