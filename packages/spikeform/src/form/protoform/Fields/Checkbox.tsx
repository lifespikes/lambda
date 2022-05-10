/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { memo } from 'react'
import {
  GenericInputProps,
  SmartInputFactory,
} from '@spikeform/types/protoform.type'
import _Checkbox from '@spikeform/form/Checkbox'
import InputContext from '@spikeform/form/protoform/Form/InputContext'
import { ChakraProps } from '@chakra-ui/react'
import { CheckboxPropsInterface } from '@spikeform/types/input.type'

type InputComponentProps = GenericInputProps &
  ChakraProps & {
    component?: SmartInputFactory['FormComponent'] & CheckboxPropsInterface
  }

const Checkbox = React.forwardRef<unknown, InputComponentProps>(
  ({ component = _Checkbox, ...props }, ref) => (
    <InputContext ref={ref} FormComponent={component} {...props} />
  )
)

Checkbox.displayName = 'Checkbox'

export default memo(Checkbox)
