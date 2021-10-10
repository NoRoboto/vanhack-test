import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CustomText } from '~/components/Text';
import COPY from '~/data/copy';

export const JobListHeader: React.FC<{jobsNumber?: number}> = ({ jobsNumber }) => {
  return (
      <View style={styles.container}>
        <CustomText 
          message={COPY.jobListing.title}
          variant='header'
        />
        <View>
          <CustomText 
            message={COPY.jobListing.subtitle1}
            variant='shadow'
          />
          <View style={styles.counterWrapper}>
            <CustomText 
              variant='shadow'
            >
              <CustomText 
                variant='bold'
              >
                { jobsNumber || '' }
              </CustomText>
              {` `}
              {COPY.jobListing.subtitle2}
            </CustomText>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterWrapper: {
    flexDirection: 'row',
  }
});
