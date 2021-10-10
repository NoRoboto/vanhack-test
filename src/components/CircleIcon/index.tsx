import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { theme } from '~/styles/theme';

export const Icon = ({ name }: { name: keyof typeof Feather.glyphMap; }) => {
  return (
    <View style={styles.circle}>
      <Feather name={name} size={20} color={theme.colors.tertiary.dark} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.background.default,
  }
});