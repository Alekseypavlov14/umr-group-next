import { convertServiceToOption } from '../utils/convertServiceToOption'
import { useSelectedService } from '@features/order'

export function useValue() {
  const service = useSelectedService()

  const value = convertServiceToOption(service)

  return value
}