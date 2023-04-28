import { OrderAdditive } from './OrderAdditive.type'
import { Id } from '@shared/types/Id'

export interface Order {
  serviceId: Id
  additives: OrderAdditive[]
  date: number
  hour: number
}