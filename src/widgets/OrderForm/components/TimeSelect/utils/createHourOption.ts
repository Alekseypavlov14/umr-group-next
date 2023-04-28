import { Option } from "@shared/types/Option"

export function createHourOption(hour: number): Option {
  const labelTemplate = hour < 10 ? `0${hour}` : String(hour)

  return ({
    label: `${labelTemplate}:00`,
    value: labelTemplate
  })
}