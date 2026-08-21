import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
  isAuthenticated: boolean
  adminName: string | null
}

const initialState: AuthState = { isAuthenticated: false, adminName: null }

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true
      state.adminName = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.adminName = null
    },
  },
})

export const { setAuthenticated, logout } = authSlice.actions
export default authSlice.reducer
