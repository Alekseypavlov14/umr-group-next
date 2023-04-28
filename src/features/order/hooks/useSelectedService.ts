import { orderSelector, servicesSelector } from "../slice"
import { useAppSelector } from "@shared/hooks/useAppSelector"
import { getServiceById } from "../utils/getServiceById"

export function useSelectedService() {
  const services = useAppSelector(servicesSelector)
  const order = useAppSelector(orderSelector)

  const selectedService = getServiceById(services, order.serviceId)

  return selectedService
}