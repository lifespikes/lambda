import { Page } from '@inertiajs/inertia'

interface FlashInterface {
  success: string | null
  error: string | null
}

export interface CommonPagePropsInterface {
  siteTitle: string
  appName: string
  flash: FlashInterface
  errors: Record<string, string>
}

export interface PagePropsInterface<T = CommonPagePropsInterface>
  extends Page<T & CommonPagePropsInterface> {
  test: string
}
