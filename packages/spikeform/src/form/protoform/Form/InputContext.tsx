/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { forwardRef, ReactNode } from 'react'
import { SmartInputFactory } from '@spikeform/types/protoform.type'
import { getLabelText, undot } from '@spikeform/utils/common'
import { useProtoform } from '@spikeform/hooks/useProtoform'

const InputContext = forwardRef<
  unknown,
  SmartInputFactory & { children?: ReactNode }
>((props, ref) => {
  /**
   * pls do not touch
   * thank you :)
   *
   * - @cristianhg2
   */

  const { name, FormComponent, ...rest } = props
  const ProtoForm = useProtoform<{
    [index: string]: string
  }>()

  const inputProps = {
    id: name,
    type: 'text',
    labelText: getLabelText(props),
    size: 'md',
    isRequired: true,
    ...rest,
  }

  return (
    <ProtoForm.Consumer>
      {({ data, errors, setFieldData }) => (
        <FormComponent
          ref={ref}
          onChange={({ target: { value } }) => setFieldData(name, value)}
          value={
            undot<{
              [index: string]: string
            }>(data, name) ?? undefined
          }
          errorText={errors?.[name] ?? undefined}
          {...inputProps}
        >
          {props.children}
        </FormComponent>
      )}
    </ProtoForm.Consumer>
  )
})

InputContext.displayName = 'InputContext'

export default InputContext
