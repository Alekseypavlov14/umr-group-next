import { ChangeEvent } from "react"

export function getTimeFromEvent(e: ChangeEvent<HTMLInputElement>) {
  return new Date(e.target.value).getTime()
}