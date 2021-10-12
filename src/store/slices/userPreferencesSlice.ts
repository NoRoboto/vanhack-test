import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { IJobItemProp } from '~/api/getJobList';
import { loadListFromStorage } from '../thunks/userPreferences';

export interface UserPreferencesState {
  showOnboarding: boolean;
  bookmarkList: Array<IJobItemProp>,
  jobApplicationList: Array<IJobItemProp>
}

const initialState: UserPreferencesState = {
  showOnboarding: true,
  bookmarkList: [],
  jobApplicationList: []
}

export const getMemoizedBookmarkIds = createSelector(
  (userPreferencesState: UserPreferencesState) => userPreferencesState.bookmarkList,
  (bookmarkList) => {
    return bookmarkList.map(bookmark => bookmark.id);
  }
);

export const getMemoizedAppliedIds = createSelector(
  (userPreferencesState: UserPreferencesState) => userPreferencesState.jobApplicationList,
  (jobApplicationList) => {
    return jobApplicationList.map(applied => applied.id);
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
    applyJob: (state, action: PayloadAction<IJobItemProp>) => {
      state.jobApplicationList = [...state.jobApplicationList, action.payload];
    },
    removeApplication: (state, action: PayloadAction<string>) => {
      state.jobApplicationList = state.jobApplicationList.filter(state => state.id !== action.payload);
    },
  },
  extraReducers: {
    [loadListFromStorage.fulfilled.toString()]: (state, { payload }) => {
      state.bookmarkList = payload || [];
    }
  }
})

// Action creators are generated for each case reducer function
export const { setOnboardingFlag, setBookmarkJob, removeBookmark, applyJob, removeApplication } = userPreferencesSlice.actions

export default userPreferencesSlice.reducer;