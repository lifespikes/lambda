/*
 * PayrollGoat - HCM Software built on the Zeal Payroll API
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */
import {useEffect, useState} from 'react';

const useDebounce = (callback: () => void, duration: number) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  });

  return () => {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(setTimeout(callback, duration));
  };
};

export default useDebounce;
