import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IJobItemProp } from '~/api/getJobList';
import { Icon } from '~/components/CircleIcon';

import { saveListToStorage } from '~/store/thunks/userPreferences';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setBookmarkJob, getMemoizedBookmarkIds, removeBookmark } from '~/store/slices/userPreferencesSlice';

export const BookmarkButton: React.FC<{ item: IJobItemProp, color?: string }> = ({ item, color }) => {
  const dispatch = useAppDispatch();
  const bookmarkIds = useAppSelector((state) => getMemoizedBookmarkIds(state.userPreferences));
  const isBookmarked = bookmarkIds.includes(item.id);

  const bookmarkJob = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(item.id));
      return;
    }

    dispatch(setBookmarkJob(item));
    dispatch(saveListToStorage({ list: 'bookmarkList', key: 'bookmarks' }));
  }

  return (
    <TouchableOpacity onPress={bookmarkJob}>
      <Icon name={isBookmarked ? 'bookmark-check-outline' : 'bookmark-outline'} backgroundColor={color} />
    </TouchableOpacity>
  );
}
