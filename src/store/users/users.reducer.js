import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...action.payload }
    },
    resetState: (state) => {
      state.value = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, resetState } = userSlice.actions

export default userSlice.reducer