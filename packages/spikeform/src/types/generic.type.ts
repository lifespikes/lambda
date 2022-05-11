/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import {
  BoxProps,
  FlexProps,
  IconProps,
  StatArrowProps,
  StyleProps,
} from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'
import { MotionStyle } from 'framer-motion'
import { ModalProps } from '@chakra-ui/modal/dist/declarations/src/modal'

export interface RectangleBadgePropsInterface {
  name?: string
  icon?: IconProps
  containerStyles?: StyleProps
  children: ReactNode
  onClick?: () => void
}

export interface ModalPropsInterface extends Omit<ModalProps, 'onClose'> {
  title: string
  isOpen: boolean
  onClose?: () => void
  buttons?: ReactNode
  children: ReactNode
  maxWidth?: string
  size?: string
}

export interface SideBarProps extends FlexProps {
  isShowLogout?: boolean
}

export interface StatisticProps {
  title: string
  desc: string
  type: StatArrowProps['type']
  hasFormat?: boolean
  amount: number | string
}

export interface CollapseInvoiceColumnProps {
  isOpen: boolean
  onToggle?: () => void
  onClose?: (isOpen: boolean) => void
}

export type InvoiceFormValues = {
  from: string | Date | null
  to: string | Date | null
  invoice_number: string
}
