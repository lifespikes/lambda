/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import Input from '../components/Input'
import {
  SpikeFormContext,
  SpikeInput,
  SpikeSelect,
} from '../types/spikeform.type'
import { useContext } from 'react'
import { SpikeContext } from '../components/SpikeForm'
import Select from '../components/Select'

const useSpikeContext = <T>() => {
  const context = useContext(SpikeContext) as SpikeFormContext<T>
  const CastInput = Input as SpikeInput<T>
  const CastSelect = Select as SpikeSelect<T>

  return {
    form: {
      data: context.data,
      errors: context.errors,
      ready: !context.processing && !context.hasErrors,
      set: context.setData,
    },
    components: {
      Field: CastInput,
      Select: CastSelect,
    },
  }
}

export default useSpikeContext
