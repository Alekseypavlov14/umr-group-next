import { Service } from '../types/Service.type'
import { Id } from '@shared/types/Id'

export function getServiceById(services: Service[], serviceId: Id) {
  return services.find(service => service.id === serviceId)
}