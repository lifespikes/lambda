/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React, { Consumer, useState } from 'react'
import dayjs from 'dayjs'
import { SpikeContext } from '../components/SpikeForm'
import {
  SFData,
  SpikeFormContext,
  SpikeFormControl,
} from '../types/spikeform.type'
import { InputPropsInterface } from '../types/input.type'
import AppDatePicker from './AppDatePicker'
import { toTitle } from '../utils/common'

const DatePicker = <T extends SFData<T>>({
  label,
  required = true,
  name,
  ...props
}: InputPropsInterface & SpikeFormControl<T>) => {
  const FormConsumer = SpikeContext.Consumer as Consumer<SpikeFormContext<T>>
  const [dateObj, setDateObj] = useState<Date | null>(null)

  return (
    <FormConsumer>
      {({ data, errors, setData, __spk, clearErrors }) => {
        return (
          <AppDatePicker
            name={name}
            labelText={label ?? toTitle(name)}
            selected={dateObj}
            dateFormat='yyyy-MM-dd'
            errorText={errors?.[name] ?? undefined}
            onChange={(date, event) => {
              setDateObj(date)
              clearErrors(name)
              setData({
                ...data,
                [name]: dayjs(date).startOf('day').toLocaleString(),
              })
            }}
            isRequired={required}
            dropdownMode='select'
            showPopperArrow={false}
            showMonthDropdown={true}
            showYearDropdown={true}
            {...props}
          />
        )
      }}
    </FormConsumer>
  )
}

export default DatePicker
