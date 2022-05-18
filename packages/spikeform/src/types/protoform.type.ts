/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, {
  ChangeEvent,
  ChangeEventHandler,
  ComponentType,
  ForwardedRef,
  ReactElement,
} from 'react'
import { ProtoFormContext } from '@spikeform/form/protoform/Form/FormContext'
import { ChakraProps } from '@chakra-ui/react'
import { SwitchPropsInterface } from '@spikeform/types/input.type'

export type FormElement = HTMLSelectElement | HTMLInputElement

export interface GenericInputProps {
  name: string
  id?: string
  type?: string
  value?: string | number
  labelText?: string | boolean
  size?: 'sm' | 'md' | 'lg'
  errorText?: string
  onChange?: ChangeEventHandler
  isRequired?: boolean
  placeholder?: string
}

export interface SelectInputProps extends GenericInputProps {
  options?: string[] | { name: string; value: string | number }[]
  children?: ReactElement
}

export type SwitchComponentProps = GenericInputProps &
  ChakraProps & {
    component?: SmartInputFactory['FormComponent'] & SwitchPropsInterface
  }

export interface SmartInputFactory extends GenericInputProps {
  FormComponent: ComponentType<{
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: number | string | undefined
    errorText: string | undefined
    children?: React.ReactNode
    ref: ForwardedRef<any>
  }>
}

export type ProtoFormOmit<T> = Pick<ProtoFormContext<T>, 'data' | 'errors'>

export interface ProtoFormProps<T = Record<string, string>>
  extends ProtoFormOmit<T> {
  onFieldUpdated: SetterProtoFormType<T>
  onSubmit: (data: T) => void
  children: ReactElement<HTMLFormElement[]>
}

export type SubmitHandler<T> = (values: T) => void

export type SetterProtoFormType<T> = <V extends keyof T>(
  field: keyof T,
  value: T[V]
) => void
