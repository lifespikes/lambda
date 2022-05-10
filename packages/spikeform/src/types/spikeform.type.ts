/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import { InertiaFormProps } from '@inertiajs/inertia-react'
import { ReactNode } from 'react'
import {
  InputPropsInterface,
  SelectPropsInterface,
} from '@spikeform/types/input.type'
import { GenericInputProps } from '@spikeform/types/protoform.type'
import { Page } from '@inertiajs/inertia'

export type SFData<T extends Record<string, string | number>> = Record<
  keyof T,
  T[keyof T]
>

export interface SpikeInput<T> {
  (
    props: SpikeFormControl<T> & {
      name: keyof T
    } & InputPropsInterface
  ): JSX.Element
}

export type SpikeSelectProps<T> = SelectPropsInterface &
  GenericInputProps &
  SpikeFormControl<T> & {
    options?:
      | string[]
      | {
          value: string
          label: string
        }[]
  }

export interface SpikeSelect<T> {
  (
    props: SpikeSelectProps<T> & {
      name: keyof T
    }
  ): JSX.Element
}

export interface SpikeFormProps<T> {
  form: SpikeFormHook<T>

  children: (
    components: {
      Field: SpikeInput<T>
    },
    options: {
      data: T
      errors: ErrorMap<T>
      ready: boolean
      set: (field: keyof T, value: T[keyof T]) => void
    }
  ) => ReactNode

  ignoreValidation?: (string & keyof T)[]

  onSubmit: (payload: SpikeFormHook<T>['data']) => void
}

export type SpikeFormContext<T> = Pick<
  SpikeFormHook<T>,
  | '__spk'
  | 'data'
  | 'setData'
  | 'errors'
  | 'clearErrors'
  | 'processing'
  | 'hasErrors'
>

export type SpikeFormControl<T> = {
  name: keyof T
  required?: boolean
  label?: string
}

export type ErrorMap<T extends SFData<T>> = {
  [key in keyof T]: string
}

export type SpikeFormHook<T extends SFData<T>> = Omit<
  InertiaFormProps<T>,
  'errors'
> & {
  errors: ErrorMap<T>

  submit: () => Promise<Page>

  __spk: {
    uri: () => string

    active: (name: string) => boolean
    touched: (name: string) => boolean

    touch: (name: string) => void
    blur: (name: string) => void

    realTimeValidate: () => void
    ignoreValidation: string[]
  }
}
