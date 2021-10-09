import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserPreferencesState {
  showOnboarding: boolean;
}

const initialState: UserPreferencesState = {
  showOnboarding: true,
}

export const userPreferencesSlice = createSlice({
  name: 'userPreferencesState',
  initialState,
  reducers: {
    setOnboardingFlag: (state, action: PayloadAction<boolean>) => {
      state.showOnboarding = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOnboardingFlag } = userPreferencesSlice.actions

export default userPreferencesSlice.reducer;