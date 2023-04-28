import { createHourOption } from "./createHourOption"
import { Option } from "@shared/types/Option"

const HOURS_IN_DAY = 24

export function getTimeOptions(): Option[] {
  return Array.from(new Array<Number>(HOURS_IN_DAY))
    .map((_, index) => index)
    .map(createHourOption)
}