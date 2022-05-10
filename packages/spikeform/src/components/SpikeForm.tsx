/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { FormEvent, ReactElement, useEffect } from 'react'
import Input from '@spikeform/components/Input'
import {
  SFData,
  SpikeFormContext,
  SpikeFormProps,
  SpikeInput,
} from '@spikeform/types/spikeform.type'
import { deferUntil } from '@spikeform/utils/common'

export const SpikeContext = React.createContext<SpikeFormContext<unknown>>({
  __spk: {
    uri: () => '',
    touch: () => false,
    touched: () => false,
    active: () => false,
    blur: () => false,
    realTimeValidate: () => undefined,
    ignoreValidation: [],
  },
  data: {},
  setData: () => undefined,
  clearErrors: () => undefined,
  errors: {},
  hasErrors: true,
  processing: false,
})

const SpikeForm = <T extends SFData<T>>({
  form,
  children,
  onSubmit,
}: SpikeFormProps<T>): ReactElement | null => {
  const CastInput = Input as SpikeInput<T>

  useEffect(() => {
    form.__spk.realTimeValidate()
  }, [form.data])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    deferUntil(() => !form.processing)
      .then(() => {
        if (!form.hasErrors) {
          onSubmit(form.data)
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <SpikeContext.Provider value={form as SpikeFormContext<unknown>}>
        {children(
          {
            Field: CastInput,
          },
          {
            data: form.data,
            errors: form.errors,
            ready: !form.processing && !form.hasErrors,
            set: form.setData,
          }
        )}
      </SpikeContext.Provider>
    </form>
  )
}

export default SpikeForm
