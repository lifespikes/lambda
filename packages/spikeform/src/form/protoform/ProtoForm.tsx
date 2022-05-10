/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { FormEventHandler, Provider, ReactElement } from 'react'
import FormContext, {
  ProtoFormContext,
  ProtoFormSetter,
} from '@spikeform/form/protoform/Form/FormContext'
import { SubmitHandler } from '@spikeform/types/protoform.type'

interface ProtoFormProps<T> {
  data: T
  errors: Record<keyof T, T[keyof T]>
  onFieldUpdated: ProtoFormSetter<T>
  onSubmit: SubmitHandler<T>
  children: ReactElement<HTMLFormElement[]>
}

const ProtoForm = <T,>({
  data,
  errors,
  onFieldUpdated,
  onSubmit,
  children,
}: ProtoFormProps<T>) => {
  const submitIfValidationPasses: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (e.currentTarget.checkValidity()) {
      onSubmit(data)
    }
  }

  const TypedContextProvider = FormContext.Provider as Provider<
    ProtoFormContext<T>
  >

  return (
    <TypedContextProvider
      value={{
        errors,
        data,
        setFieldData: onFieldUpdated,
      }}
    >
      <form onSubmit={submitIfValidationPasses}>{children}</form>
    </TypedContextProvider>
  )
}

export default ProtoForm
