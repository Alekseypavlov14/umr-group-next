import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '@app/store'

interface initialStateInterface {
  isOpened: boolean
}

const initialState: initialStateInterface = {
  isOpened: false
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open(state) {
      state.isOpened = true
    },
    close(state) {
      state.isOpened = false
    }
  }
})

export const menuReducer = menuSlice.reducer
export const { open, close } = menuSlice.actions
export const isOpenedSelector = (state: AppState) => state.menu.isOpened