import { Service } from "@features/order"
import { Option } from '@shared/types/Option'

export function convertServiceToOption(service: Service): Option {
  return ({
    label: service.label,
    value: service.name
  })
}