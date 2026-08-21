import { createSlice } from "@reduxjs/toolkit"

interface UiState {
  isMobileNavOpen: boolean
}

const initialState: UiState = { isMobileNavOpen: false }

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen
    },
    closeMobileNav: (state) => {
      state.isMobileNavOpen = false
    },
  },
})

export const { toggleMobileNav, closeMobileNav } = uiSlice.actions
export default uiSlice.reducer
