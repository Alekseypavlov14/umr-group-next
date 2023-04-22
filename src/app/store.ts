import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { langReducer } from '../features/lang/languageSlice'
import { orderReducer } from '../features/order/orderSlice'
import { menuReducer } from './../features/menu/menuSlice'

const store = configureStore({
  reducer: { 
    menu: menuReducer,
    order: orderReducer,
    lang: langReducer
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store