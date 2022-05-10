/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import React from 'react';

export interface Fields {
  [fieldName: string]: unknown;
}

export type ProtoFormSetterByObject<T> = (data: T) => void;
export type ProtoFormSetter<T> = <K extends keyof T>(
  name: K,
  value: T[K],
) => void;

export interface ProtoFormContext<T = unknown> {
  data: T;
  errors: Record<keyof T, T[keyof T]>;
  setFieldData: ProtoFormSetterByObject<T> & ProtoFormSetter<T>;
}

const FormContext = React.createContext<ProtoFormContext>({
  errors: {},
  data: {},
  setFieldData: (...args: Array<unknown>) => {
    return console.error(
      'Cannot use boilerplate implementation',
      JSON.stringify(args),
    );
  },
});

export default FormContext;
