import { createAsyncThunk } from '@reduxjs/toolkit'
import { IJobItemProp } from '~/api/getJobList';
import { Storage } from '~/components/AsyncStorage/storage';
import { UserPreferencesState } from '../slices/userPreferencesSlice';

export const loadBookmarksFromStorage = createAsyncThunk(
  'user/bookmarks/load',
  async () => {
    return await Storage.getData<Array<IJobItemProp>>('bookmarks');
  }
);

export const saveBookmarksToStorage = createAsyncThunk(
  'user/bookmarks/save',
  async (_, { getState }) => {
    const state = getState() as { userPreferences: UserPreferencesState };
    return await Storage.storeData<Array<IJobItemProp>>(state.userPreferences.bookmarkList, 'bookmarks');
  }
);