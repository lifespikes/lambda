import v from 'voca'
import { GenericInputProps } from '@spikeform/types/protoform.type'
export const toTitle = (str: string) => v.titleCase(str).replaceAll('_', ' ')

export const deferUntil = async (condition: () => boolean) => {
  await new Promise((resolve) => setTimeout(resolve, 200))

  if (!condition()) {
    await deferUntil(condition)
  } else {
    return true
  }
}

interface ObjectType<T> {
  [key: string]: T[keyof T]
}

export const getLabelText = (props: GenericInputProps) =>
  props?.labelText ?? toTitle(props.name)

export const undot = <T>(object: ObjectType<T>, key: string): T[keyof T] => {
  const entries = key.split('.')

  if (entries.length > 1) {
    const removed = entries.shift() as string
    object = object[removed] as unknown as ObjectType<T>

    return undot<T>(object, entries.join('.'))
  }

  return object[key]
}
