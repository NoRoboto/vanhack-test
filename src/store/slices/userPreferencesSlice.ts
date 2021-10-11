import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { IJobItemProp } from '~/api/getJobList';
import { loadBookmarksFromStorage } from '../thunks/userPreferences';

export interface UserPreferencesState {
  showOnboarding: boolean;
  bookmarkList: Array<IJobItemProp>
}

const initialState: UserPreferencesState = {
  showOnboarding: true,
  bookmarkList: [],
}

export const getMemoizedBookmarkIds = createSelector(
  (userPreferencesState: UserPreferencesState) => userPreferencesState.bookmarkList,
  (bookmarkList) => {
    return bookmarkList.map(bookmark => bookmark.id);
  }
);

export const userPreferencesSlice = createSlice({
  name: 'userPreferencesState',
  initialState,
  reducers: {
    setOnboardingFlag: (state, action: PayloadAction<boolean>) => {
      state.showOnboarding = action.payload;
    },
    setBookmarkJob: (state, action: PayloadAction<IJobItemProp>) => {
      state.bookmarkList = [...state.bookmarkList, action.payload];
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarkList = state.bookmarkList.filter(state => state.id !== action.payload);
    },
  },
  extraReducers: {
    [loadBookmarksFromStorage.fulfilled.toString()]: (state, { payload }) => {
      state.bookmarkList = payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setOnboardingFlag, setBookmarkJob, removeBookmark } = userPreferencesSlice.actions

export default userPreferencesSlice.reducer;