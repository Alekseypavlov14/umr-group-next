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

export interface ToggleAdditive {
  id: Id
  isChecked: boolean
}

export interface UpdateLetter {
  letter: string
}