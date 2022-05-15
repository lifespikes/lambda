import { useEffect } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { PagePropsInterface } from '@/frontend/types/common.type'
import { useAlert } from '@/frontend/hooks/useAlert'

export const useFlashSessionAlerts = (enableValidationErrors = false) => {
  const { flash, errors } = usePage<PagePropsInterface>().props

  const toast = useAlert()

  useEffect(() => {
    if (flash?.error) {
      toast.error({
        title: 'Ups! Something went wrong',
        description: flash.error,
        isClosable: true
      })
    }

    if (flash?.success) {
      toast.success({
        title: 'Everything looks good!',
        description: flash.success,
        isClosable: true
      })
    }

    if (enableValidationErrors && errors) {
      Object.values(errors).forEach(error => {
        toast.error({
          title: 'Ups! Something went wrong',
          description: error,
          isClosable: true
        })
      })
    }
  }, [flash, errors])
}
