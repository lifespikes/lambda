/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { ChangeEvent, Consumer } from 'react'
import AppSelect from '@spikeform/form/Select'
import indefinite from 'indefinite'
import { getLabelText, toTitle } from '@spikeform/utils/common'
import { SpikeContext } from '@spikeform/components/SpikeForm'
import {
  SFData,
  SpikeFormContext,
  SpikeSelectProps,
} from '@spikeform/types/spikeform.type'

const Select = <T extends SFData<T>>(props: SpikeSelectProps<T>) => {
  const FormConsumer = SpikeContext.Consumer as Consumer<SpikeFormContext<T>>
  const label = getLabelText(props)

  const guessPlaceholder = () =>
    indefinite(typeof label !== 'string' ? 'items' : label).toLowerCase()

  const cast = (e: ChangeEvent<HTMLSelectElement>) => {
    return e.target.value as T[keyof T]
  }
  return (
    <FormConsumer>
      {({ data, errors, setData, __spk }) => (
        <AppSelect
          placeholder={props.placeholder ?? `Select ${guessPlaceholder()}`}
          boxShadow={'sm'}
          borderColor={'gray.300'}
          _placeholder={{ color: 'gray.500' }}
          value={data[props.name]}
          isRequired={props.isRequired ?? true}
          onChange={(e) => setData(props.name, cast(e))}
          errorText={errors[props.name]}
          labelText={props.label ?? toTitle(props.name)}
          {...props}
        >
          {props.options
            ? props.options.map((opt, k) =>
                typeof opt === 'string' ? (
                  <option value={opt} key={k}>
                    {toTitle(opt)}
                  </option>
                ) : (
                  <option value={opt.value} key={k}>
                    {opt.label}
                  </option>
                )
              )
            : null}
          {props.children}
        </AppSelect>
      )}
    </FormConsumer>
  )
}

export default Select
