import { selectService, servicesSelector } from '@features/order'
import { getServiceByName } from '../utils/getServiceByName'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { Option } from '@shared/types/Option'

export function useSelectHandler() {
  const services = useAppSelector(servicesSelector)
  const dispatch = useAppDispatch()

  return (option: Option) => {
    const serviceName = option.value

    const newService = getServiceByName(services, serviceName)
    if (!newService) return
  
    dispatch(selectService({ serviceId: newService.id }))
  }
}