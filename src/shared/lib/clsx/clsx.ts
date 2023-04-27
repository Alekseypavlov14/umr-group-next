import classNames, { ClassValue } from "clsx"

export function clsx(...values: ClassValue[]) {
  return classNames(...values)
}