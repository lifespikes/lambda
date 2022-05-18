import { useToast } from '@chakra-ui/react'
import { UseToastOptions } from '@chakra-ui/toast/src/use-toast'
import {
  ToastStatusesType,
  useAlertReturnType
} from '@/frontend/types/hooks/useAlert.type'

const statuses: ToastStatusesType[] = ['success', 'warning', 'error', 'info']

export const useAlert = (options?: UseToastOptions): useAlertReturnType => {
  const toast = useToast({ ...options, position: 'top-right' })

  return {
    ...statuses.reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: (opts?: UseToastOptions) => toast({ status: curr, ...opts })
      }),
      {}
    ),
    custom: (node, opts) =>
      toast({ render: () => node, status: 'success', ...opts })
  } as useAlertReturnType
}
