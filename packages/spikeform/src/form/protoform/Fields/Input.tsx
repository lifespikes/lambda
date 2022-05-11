/*
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
import _Input from '@spikeform/form/Input'
import InputContext from '@spikeform/form/protoform/Form/InputContext'
import { ChakraProps } from '@chakra-ui/react'

type InputComponentProps = GenericInputProps &
  ChakraProps & { component?: SmartInputFactory['FormComponent'] }

const Input = React.forwardRef<unknown, InputComponentProps>(
  ({ component = _Input, ...props }, ref) => (
    <InputContext ref={ref} FormComponent={component} {...props} />
  )
)

Input.displayName = 'Input'

export default memo(Input)
