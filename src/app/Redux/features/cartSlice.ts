import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type
export const cartSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    // add to cart functionality
    add(state: any, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000)
      let newobj = { ...action.payload, uuid }
      state.push(newobj)
    },
  },
})

export const {add} = cartSlice.actions

export default cartSlice.reducer
