/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */
import React from 'react'
import {
  CheckboxProps,
  InputProps,
  SelectProps,
  SwitchProps,
} from '@chakra-ui/react'
import { ReactDatePickerProps } from 'react-datepicker'
import { PinInputFieldProps } from '@chakra-ui/pin-input/dist/declarations/src/pin-input'

interface BaseInputProps {
  errorText?: string
  labelText?: string | boolean
  helperText?: string
  isRequired?: boolean
  readOnly?: boolean
}

export interface InputPropsInterface extends InputProps, BaseInputProps {
  InputContent?: React.ReactNode
}

export interface PinInputPropsInterface
  extends PinInputFieldProps,
    BaseInputProps {}

export interface SelectPropsInterface extends SelectProps, BaseInputProps {}
export interface SwitchPropsInterface extends SwitchProps, BaseInputProps {}
export interface CheckboxPropsInterface extends CheckboxProps, BaseInputProps {}

export interface DatePickerPropsInterface
  extends ReactDatePickerProps,
    BaseInputProps {
  isRequired?: boolean
}
