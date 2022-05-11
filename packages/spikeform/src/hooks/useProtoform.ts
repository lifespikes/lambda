/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import { Consumer, useContext } from 'react'
import FormContext, {
  ProtoFormContext,
} from '@spikeform/form/protoform/Form/FormContext'

// TODO: review this later

export const useProtoform = <T>() => {
  const protoFormContext = useContext(FormContext) as ProtoFormContext<T>

  if (!protoFormContext) {
    throw new Error(
      'useProtoFormContext hook must be used with ProtoFormProvider'
    )
  }

  return {
    ...protoFormContext,
    ...{
      Consumer: FormContext.Consumer as Consumer<ProtoFormContext<T>>,
    },
  }
}
