import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '~/styles/theme';

export const Icon = ({ name, size = 22 }: { name: keyof typeof MaterialCommunityIcons.glyphMap, size?: number }) => {
  return (
    <View style={styles.circle}>
      <MaterialCommunityIcons name={name} size={size} color={theme.colors.tertiary.dark} />
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