import { AppState } from './../../app/store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Content } from "../../types/Content"
import content from './../../data/content.json'

const initialState: Content = content.en

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    translate(state, action: PayloadAction<string>) {
      state = content[action.payload]
    }
  }
})

export const langReducer = langSlice.reducer
export const { translate } = langSlice.actions
export const langSelector = (state: AppState) => state.lang