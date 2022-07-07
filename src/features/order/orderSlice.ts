import { Service } from './../../types/Service.type'
import { AppState } from './../../app/store'
import { createSlice } from '@reduxjs/toolkit'

interface Additive {
  name: string,
  price: number,
  isChecked: boolean
}

interface initialStateInterface {
  startPrice: number
  additives: Additive[]
  date: number,
  hour: number
}

type Action<T> = {
  payload: T
}

const initialState: initialStateInterface = {
  startPrice: 0,
  additives: [],
  date: 0,
  hour: 0
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeService(state: initialStateInterface, action: Action<Service>) {
      state.startPrice = action.payload.startPrice
      state.additives = action.payload.additives.map(additive => ({
        name: additive.name,
        price: additive.price,
        isChecked: false
      }))
      state.date = Date.now()
      state.hour = 0
    },
    updateAdditive(state, action: Action<Additive>) {
      let additive = state.additives.find(additive => {
        return additive.name === action.payload.name
      })
      
      additive = action.payload
    },
    updateDate(state, action: Action<number>) {
      state.date = action.payload
    },
    updateHour(state, action: Action<number>) {
      state.hour = action.payload
    }
  }
})

export const orderReducer = orderSlice.reducer
export const { changeService, updateAdditive, updateDate, updateHour} = orderSlice.actions
export const orderSelector = (state: AppState) => state.order