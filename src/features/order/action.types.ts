import { OrderAdditive } from "./types/OrderAdditive.type"
import { Id } from "@shared/types/Id"

export interface SelectService {
  serviceId: Id
}

export interface ChangeHour {
  hour: number
}

export interface ChangeDate {
  date: number
}

export interface ToggleAdditive extends OrderAdditive {}