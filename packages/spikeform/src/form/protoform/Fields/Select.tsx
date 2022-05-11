/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { FC } from 'react'
import { SelectInputProps } from '@spikeform/types/protoform.type'
import _Select from '@spikeform/form/Select'
import indefinite from 'indefinite'
import InputContext from '@spikeform/form/protoform/Form/InputContext'
import { getLabelText } from '@spikeform/utils/common'

const Select: FC<SelectInputProps> = (props) => {
  const label = getLabelText(props)

  return (
    <InputContext
      FormComponent={_Select}
      {...{
        placeholder:
          props.placeholder ??
          `Select ${indefinite(
            typeof label !== 'string' ? 'items' : label
          ).toLowerCase()}`,
        boxShadow: 'sm',
        borderColor: 'gray.500',
        _placeholder: {
          color: 'gray.500',
        },
        ...props,
      }}
    >
      {props.options?.map((option, k) =>
        typeof option === 'string' ? (
          <option key={k} value={option}>
            {getLabelText({ name: option })}
          </option>
        ) : (
          <option key={k} value={option.value}>
            {option.name}
          </option>
        )
      )}
      {props.children}
    </InputContext>
  )
}

export default Select
