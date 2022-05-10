/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import { useForm } from '@inertiajs/inertia-react'
import { useEffect, useState } from 'react'
import { ErrorMap, SpikeFormHook } from '@spikeform/types/spikeform.type'
import useDebounce from '@spikeform/hooks/useDebounce'
import { deferUntil } from '@spikeform/utils/common'
import * as Inertia from '@inertiajs/inertia'

const useSpikeForm = <T>(
  route: string,
  initialValues: T,
  options = { debounceLength: 350, ignoreValidation: [''] }
): SpikeFormHook<T> => {
  const { debounceLength, ignoreValidation } = options
  const inertiaForm = useForm<T>(initialValues)

  const [touchedInputs, setTouchedInputs] = useState<string[]>([])
  const [activeInput, setActiveInput] = useState('')
  const [validating, setValidating] = useState(false)
  const [errors, setErrors] = useState({} as ErrorMap<T>)
  const [hasErrors, setHasErrors] = useState(false)

  const realTimeValidate = useDebounce(() => {
    if (route) {
      inertiaForm.post(route, {
        preserveState: true,
        preserveScroll: true,
        headers: {
          'X-RTV-Enabled': 'true',
        },
        onFinish: () => setValidating(false),
      })
    }
  }, debounceLength)

  useEffect(() => {
    const filtered = Object.fromEntries(
      Object.entries(inertiaForm.errors).filter(([key]) => {
        return (
          ignoreValidation.indexOf(key) < 0 && touchedInputs.indexOf(key) > -1
        )
      })
    ) as ErrorMap<T>

    setErrors(filtered)
    setHasErrors(Object.values(filtered).length > 0)
  }, [inertiaForm.errors])

  const defer = (cb: (...params: any[]) => void) => {
    return (...params: string[]) => {
      deferUntil(() => !(inertiaForm.processing || validating))
        .then(() => cb(...params))
        .catch((err) => console.error(err))
    }
  }

  const factory =
    (method: Inertia.Method) => (url: string, options?: Inertia.VisitOptions) =>
      inertiaForm.submit(method, url, options)

  const verbMethods = Object.fromEntries(
    [
      Inertia.Method.GET,
      Inertia.Method.POST,
      Inertia.Method.PUT,
      Inertia.Method.DELETE,
      Inertia.Method.PATCH,
    ].map((method) => {
      return [method, defer(factory(method))]
    })
  )

  return {
    ...inertiaForm,
    ...verbMethods,

    processing: inertiaForm.processing || validating,
    errors,
    hasErrors,

    submit: () =>
      new Promise((resolve, reject) => {
        inertiaForm.post(route, {
          onSuccess: resolve,
          onError: reject,
        })
      }),

    __spk: {
      uri: () => route,

      active: (name) => activeInput === name,
      touched: (name) => touchedInputs.indexOf(name) > -1,

      touch: defer((name: string) => {
        if (touchedInputs.indexOf(name) < 0) {
          setTouchedInputs([...touchedInputs, name])
        }
      }),

      blur: defer((name: string) => {
        if (name === activeInput) {
          setActiveInput('')
        }
      }),

      realTimeValidate,

      ignoreValidation,
    },
  }
}

export default useSpikeForm
