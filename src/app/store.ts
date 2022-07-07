import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { orderReducer } from '../features/order/orderSlice'
import { menuReducer } from './../features/menu/menuSlice'

export function makeStore() {
  return configureStore({
    reducer: { 
      menu: menuReducer,
      order: orderReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store