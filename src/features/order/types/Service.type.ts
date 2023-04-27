import { Additive } from '@features/order'

export type Service = {
  name: string
  label: string
  startPrice: number
  additives: Additive[]
}