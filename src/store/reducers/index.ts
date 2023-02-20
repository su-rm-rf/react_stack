import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from '../index'

interface xxState {
  num: number
}

const initialState: xxState = {
  num: 0
}

export const xxSlice = createSlice({
  name: 'xx',
  initialState,
  reducers: {
    add: state => {
      state.num += 1
      console.log(state.num)
    },
    del: state => {
      state.num -= 1
      console.log(state.num)
    },
    addByNum: (state, action: PayloadAction<number>) => {
      state.num += action.payload
    }
  }
})

export const { add, del, addByNum } = xxSlice.actions
export default xxSlice.reducer
