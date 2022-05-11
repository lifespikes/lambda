import { UseToastOptions } from '@chakra-ui/toast/src/use-toast'
import { ReactNode } from 'react'

export type ToastCbType = (opts: Omit<UseToastOptions, 'status'>) => void

export type ToastStatusesType = 'success' | 'warning' | 'error' | 'info'

export type useAlertReturnType = {
  [key in ToastStatusesType]: ToastCbType
} & { custom: (node: ReactNode, opts: UseToastOptions) => void }
