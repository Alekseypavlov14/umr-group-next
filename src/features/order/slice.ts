import { ChangeDate, ChangeHour, SelectService, ToggleAdditive } from './action.types'
import { getDefaultOrderFromService } from './utils/getDefaultOrderFromService'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getServiceById } from './utils/getServiceById'
import { AppState } from '@app/store'
import { Service } from './types/Service.type'
import { Order } from './types/Order.type'
import services from './data/services.json'

interface initialStateInterface {
  services: Service[]
  order: Order
}

const initialState: initialStateInterface = {
  services: services,
  order: getDefaultOrderFromService(services[0])
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    selectService(state, action: PayloadAction<SelectService>) {
      const serviceId = action.payload.serviceId
      const service = getServiceById(state.services, serviceId)

      if (!service) return state

      state.order = getDefaultOrderFromService(service)
    },
    changeHour(state, action: PayloadAction<ChangeHour>) {
      const hour = action.payload.hour

      state.order.hour = hour
    },
    changeDate(state, action: PayloadAction<ChangeDate>) {
      const date = action.payload.date

      state.order.date = date
    },
    toggleAdditive(state, action: PayloadAction<ToggleAdditive>) {
      const { id, isChecked } = action.payload

      const additive = state.order.additives.find(additive => additive.id === id)
      additive.isChecked = isChecked
    }
  }
})

export const orderReducer = orderSlice.reducer
export const { selectService, changeDate, changeHour, toggleAdditive } = orderSlice.actions
export const servicesSelector = (state: AppState) => state.order.services
export const orderSelector = (state: AppState) => state.order.order