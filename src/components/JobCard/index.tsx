import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import { IJobItemProp } from '~/api/getJobList';
import { Icon } from '~/components/CircleIcon';
import { theme } from '~/styles/theme';
import { CustomText } from '../Text';
import { backgroundSelector } from '~/helpers/image';
import CONSTANTS from '~/constants'

import { saveBookmarksToStorage } from '~/store/thunks/userPreferences';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setBookmarkJob, getMemoizedBookmarkIds, removeBookmark } from '~/store/slices/userPreferencesSlice';
import { CountryFlag } from '~/components/CountryFlag';

export const JobCard: React.FC<{ item: IJobItemProp, total: number, index: number }> = ({ item, total, index }) => {
  const backgroundImage = backgroundSelector(index, CONSTANTS.BACKGROUND_CARD.ROTATION, CONSTANTS.BACKGROUND_CARD.IMAGE_LIST);
  const dispatch = useAppDispatch();
  const bookmarkIds = useAppSelector((state) => getMemoizedBookmarkIds(state.userPreferences));
  const isBookmarked = bookmarkIds.includes(item.id);

  const bookmarkJob = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(item.id));
      return;
    }

    dispatch(setBookmarkJob(item));
    dispatch(saveBookmarksToStorage());
  }

  return (
    <TouchableOpacity onPress={() => console.warn('----> ')}>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={backgroundImage}
          imageStyle={styles.backgroundImage}
          style={styles.backgroundImageContainer}
        >
          <View style={styles.leftArea}>
            <View style={styles.cardHeader}>
              <Icon name='briefcase-outline' size={20} />
              <CustomText
                props={{ numberOfLines: 1 }}
                variant='simpleHeader'
              >
                {`  `}{item.companyName}
              </CustomText>
            </View>
            <View style={{ width: '50%' }}>
              <CustomText 
                props={{ numberOfLines: 3 }}
                variant='bodyCard'
              >
                {item.title}
              </CustomText>
            </View>
            <CustomText variant='bodyCard'>
              {item.salaryFrom} ~ {item.salaryTo} {item.currency} / Year
            </CustomText>
          </View>
          <View style={styles.rightArea}>
            <TouchableOpacity onPress={bookmarkJob}>
              <Icon name={isBookmarked ? 'bookmark-check-outline' : 'bookmark-outline'} />
            </TouchableOpacity>
            <View style={styles.verticalSeparator} />
            <CountryFlag flagCode={item.flagCode} />
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  backgroundImageContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 140,
    padding: 10,
  },
  backgroundImage: {
    borderRadius: 15,
    opacity: 0.5
  },
  leftArea: {
    flex: 10,
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  rightArea: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
  },
  verticalSeparator: {
    marginVertical: theme.spacing[8]
  },
  horizontalSeparator: {
    marginHorizontal: theme.spacing[8],
  },
});