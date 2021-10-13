import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { theme } from '~/styles/theme';
import { CustomText } from '../Text';

export const RecBanner = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true
      }
    )).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.recBanner, { opacity: fadeAnim }]}>
      <CustomText variant='header' message='REC' color={theme.colors.tertiary.default} />
      <View style={styles.recIcon} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  recBanner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    marginLeft: theme.spacing[12]
  }
});
