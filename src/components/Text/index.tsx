import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';

import { theme } from '~/styles/theme'

export type TTextProps = {
  message?: string,
  variant: 'title' | 'subtitle' | 'shadow' | 'header' | 'bold' | 'simpleHeader' | 'bodyCard' | 'simpleBody',
  color?: string,
  props?: TextProps,
}

export const CustomText: React.FC<TTextProps> = ({ message, variant, children, color = theme.colors.tertiary.dark, props }) => {
  
  return <Text style={[styles.common, { color }, styles[variant]]} {...props}>
    {message || children}
  </Text>;
}


const styles = StyleSheet.create({
  common: {
    fontSize: theme.spacing[12],
    color: theme.colors.tertiary.dark
  },
  title: {
    fontSize: theme.spacing[38],
    fontWeight: '600',
    marginBottom: theme.spacing[18],
  },
  subtitle: {
    fontSize: theme.spacing[20],
    fontWeight: '100',
    color: theme.colors.tertiary.default,
  },
  shadow: {
    fontSize: theme.spacing[18],
    fontWeight: '100',
    color: theme.colors.tertiary.light,
  },
  header: {
    fontSize: theme.spacing[32],
    fontWeight: '600',
  },
  bold: {
    fontSize: theme.spacing[18],
    fontWeight: 'bold',
    color: theme.colors.tertiary.dark, 
  },
  simpleHeader: {
    fontSize: theme.spacing[18],
  },
  bodyCard: {
    fontSize: theme.spacing[14],
    fontWeight: '700',
  },
  simpleBody: {
    fontSize: theme.spacing[16],
    fontWeight: '400',
  }
});