import { AppState } from '@app/store'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Content } from "../../types/Content"
import content from '@data/content.json'

interface InitialState {
  content: Content,
  lang: string
}

const initialState: InitialState = {
  content: content.ua,
  lang: 'ua'
}

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    translate(state, action: PayloadAction<string>) {
      state.content = content[action.payload],
      state.lang = action.payload
    }
  }
})

export const langReducer = langSlice.reducer
export const { translate } = langSlice.actions
export const contentSelector = (state: AppState) => state.lang.content
export const langSelector = (state: AppState) => state.lang.lang