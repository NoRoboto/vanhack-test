import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '~/styles/theme';

export const Icon = ({ name, size = 22, iconColor = theme.colors.tertiary.dark, backgroundColor = theme.colors.background.default }:
  { name: keyof typeof MaterialCommunityIcons.glyphMap, size?: number, iconColor?: string , backgroundColor?: string }) => {
  return (
    <View style={[styles.circle, { backgroundColor: backgroundColor }]}>
      <MaterialCommunityIcons name={name} size={size} color={iconColor}/>
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

  }
});