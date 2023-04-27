import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { OrderAdditive } from './types/OrderAdditive.type'
import { AppState } from '@app/store'
import { Order } from './types/Order.type'

interface initialStateInterface extends Order {}

const initialState: initialStateInterface = {
  name: '',
  label: '',
  startPrice: 0,
  additives: [],
  date: 0,
  hour: 0
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeOrder(state: initialStateInterface, action: PayloadAction<Order>) {
      state.name = action.payload.name
      state.label = action.payload.label
      state.startPrice = action.payload.startPrice
      state.additives = action.payload.additives.map(additive => ({
        name: additive.name,
        label: additive.label,
        price: additive.price,
        isChecked: false
      }))
      state.date = Date.now()
      state.hour = 0
    },
    updateAdditive(state, action: PayloadAction<OrderAdditive>) {
      let additive: OrderAdditive = state.additives.find(additive => {
        return additive.name === action.payload.name
      })
      
      additive.isChecked = action.payload.isChecked
    },
    updateDate(state, action: PayloadAction<number>) {
      state.date = action.payload
    },
    updateHour(state, action: PayloadAction<number>) {
      state.hour = action.payload
    }
  }
})

export const orderReducer = orderSlice.reducer
export const { changeOrder, updateAdditive, updateDate, updateHour} = orderSlice.actions
export const orderSelector = (state: AppState) => state.order
export const additivesSelector = (state: AppState) => state.order.additives