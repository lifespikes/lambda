/*
 *
 * Copyright (c) LifeSpikes, LLC. 2022.
 *
 * Private license: Not to be distributed, modified, or otherwise shared without prior authorization from LifeSpikes, or by its contractually-bound customer upon delivery or release of IP.
 */

import { Link, Meta } from '@spikeform/types/resource.type'
import { ReactElement } from 'react'
import { UnknownObjectType } from '@spikeform/types/common.type'
import { Token } from '@chakra-ui/styled-system/dist/declarations/src/utils'
import { BoxProps } from '@chakra-ui/react'
import * as CSS from 'csstype'

export type TableItemType<T> = T

type ChildrenProps<T> = {
  rows: T[]
  selectedItems: TableItemType<T>[]
  onSelectItem: (item: TableItemType<T>) => void
}

export interface TablePropsInterface<T> {
  rows: T[]
  headers: string[]
  sorts?: string[]
  meta: Meta
  hasCheckbox?: boolean
  hasSorting?: boolean
  hasActions?: boolean
  hasSearch?: boolean
  hasSelectedActions?: boolean
  selectedActions?(items: T[]): ReactElement | null
  children(props: ChildrenProps<T>): ReactElement
}

export interface TableHeaderInterface {
  header: string
  sorts: string[]
  hasSorting: boolean
  onSortBy: (sort: string) => void
}

export interface TableItemPropsInterface extends UnknownObjectType {
  route?: string
  alt?: string
  width?: Token<CSS.Property.Width | number, 'sizes'>
  boxProps?: BoxProps
}

export interface TableSearchPropsInterface {
  onSearch?: () => void
}

export interface TableSearchFiltersInterface {
  search: string
  sort?: string
}

type PaginationSize = 'lg' | 'md' | 'sm' | 'xs'

export interface PaginationPropsInterface {
  links: Link[]
  size?: PaginationSize
}

export interface PageLinkPropsInterface {
  active: boolean
  label: string
  url: string
  size?: PaginationSize
}

export interface PageInactivePropsInterface {
  label: string
  size?: PaginationSize
}
