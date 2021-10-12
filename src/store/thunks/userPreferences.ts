import { createAsyncThunk } from '@reduxjs/toolkit'
import { IJobItemProp } from '~/api/getJobList';
import { Storage } from '~/components/AsyncStorage/storage';
import { UserPreferencesState } from '../slices/userPreferencesSlice';

export type storageManageProp = {
  list: 'bookmarkList' | 'jobApplicationList',
  key: 'bookmarks' | 'jobs',
}

export const loadListFromStorage = createAsyncThunk(
  'user/bookmarks|jobs/load',
  async ({ key = 'bookmarks' }: Pick<storageManageProp, 'key'>) => {
    return await Storage.getData<Array<IJobItemProp>>(key);
  }
);

export const saveListToStorage = createAsyncThunk(
  'user/bookmarks|jobs/save',
  async ({ list = 'bookmarkList', key = 'bookmarks' }: storageManageProp, { getState }) => {
    const state = getState() as { userPreferences: UserPreferencesState };

    return await Storage.storeData<Array<IJobItemProp>>(state.userPreferences[list], key);
  }
);