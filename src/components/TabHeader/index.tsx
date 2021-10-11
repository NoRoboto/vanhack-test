import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CustomText } from '~/components/Text';

export const ViewHeader: React.FC<{number: number, title: string, subtitle1: string, subtitle2: string }> = 
({ number, title, subtitle1, subtitle2 }) => {
  return (
      <View style={styles.container}>
        <CustomText 
          message={title}
          variant='header'
        />
        <View>
          <CustomText 
            message={subtitle1}
            variant='shadow'
          />
          <View style={styles.counterWrapper}>
            <CustomText 
              variant='shadow'
            >
              <CustomText 
                variant='bold'
              >
                { number }
              </CustomText>
              {` `}
              {subtitle2}
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
