import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { orderReducer } from '@features/order/orderSlice'
import { langReducer } from '@features/lang/languageSlice'
import { menuReducer } from '@features/menu/menuSlice'

export const store = configureStore({
  reducer: { 
    order: orderReducer,
    menu: menuReducer,
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
