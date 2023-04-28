import { formatDate } from "./formatDate"

export function getMinValue() {
  return formatDate(Date.now())
}