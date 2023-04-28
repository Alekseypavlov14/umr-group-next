import { OrderAdditive } from '../types/OrderAdditive.type'
import { Service } from '../types/Service.type'
import { Order } from '../types/Order.type'

export function getDefaultOrderFromService(service: Service): Order {
  const additives = service.additives.map<OrderAdditive>(additive => ({
    ...additive,
    isChecked: false
  }))

  return ({
    serviceId: service.id,
    additives: additives,
    date: Date.now(),
    hour: 0
  })
}