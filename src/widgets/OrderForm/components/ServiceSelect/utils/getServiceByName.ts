import { Service } from "@features/order"

export function getServiceByName(services: Service[], serviceName: string): Service | undefined {
  return services.find(service => service.name === serviceName)
}