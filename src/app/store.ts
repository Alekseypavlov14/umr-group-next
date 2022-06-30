import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { menuReducer } from './../features/menu/menuSlice'

export function makeStore() {
  return configureStore({
    reducer: { menu: menuReducer },
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