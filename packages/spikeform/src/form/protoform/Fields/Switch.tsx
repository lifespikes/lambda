/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { memo } from 'react'
import _Switch from '@spikeform/form/Switch'
import InputContext from '@spikeform/form/protoform/Form/InputContext'
import { SwitchComponentProps } from '@spikeform/types/protoform.type'

const Switch = React.forwardRef<unknown, SwitchComponentProps>(
  ({ component = _Switch, ...props }, ref) => {
    return <InputContext ref={ref} FormComponent={component} {...props} />
  }
)

Switch.displayName = 'Switch'

export default memo(Switch)
