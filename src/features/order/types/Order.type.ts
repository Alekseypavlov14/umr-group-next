import { OrderAdditive } from './OrderAdditive.type'

export interface Order {
  name: string
  label: string
  startPrice: number
  additives: OrderAdditive[]
  date: number,
  hour: number
}