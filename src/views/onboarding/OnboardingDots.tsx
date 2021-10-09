import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { theme } from '~/styles/theme';

export const OnboardingDots: React.FC<{ currentIndex: number, length: number }> = ({ currentIndex, length }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim, currentIndex]);

  return <View style={styles.dotContainer}>
    {Array(length).fill(null).map((_, i) =>
      <Animated.View 
        key={i}
        style={[styles.dot, currentIndex === i && { opacity: fadeAnim, ...styles.selected }]}
      />)
    }
  </View>
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: theme.spacing[12],
  },
  dot: {
    width: theme.spacing[16],
    height: theme.spacing[16],
    borderRadius: theme.spacing[16] / 2,
    marginHorizontal: theme.spacing[12],
    borderColor: theme.colors.primary.default,
    borderWidth: 1
  },
  selected: {
    backgroundColor: theme.colors.primary.default,
  }
});