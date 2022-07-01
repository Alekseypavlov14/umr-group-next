import { Additive } from './Additive.type'

export type Service = {
  name: string
  label: string
  startPrice: number
  additives: Additive[]
}