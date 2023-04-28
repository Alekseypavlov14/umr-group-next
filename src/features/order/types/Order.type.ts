import { Id } from '@shared/types/Id'
import { OrderAdditive } from './OrderAdditive.type'

export interface Order {
  serviceId: Id
  additives: OrderAdditive[]
  date: number
  hour: number
}