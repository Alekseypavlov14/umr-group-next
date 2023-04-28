import { convertServiceToOption } from '../utils/convertServiceToOption'
import { servicesSelector } from '@features/order'
import { useAppSelector } from '@shared/hooks/useAppSelector'

export function useServiceOptions() {
  const services = useAppSelector(servicesSelector)

  const options = services.map(convertServiceToOption)

  return options
}