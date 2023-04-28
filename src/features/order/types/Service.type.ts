import { Additive } from './Additive.type'
import { Id } from '@shared/types/Id'

export interface Service {
  id: Id
  name: string
  label: string
  startPrice: number
  additives: Additive[]
}
