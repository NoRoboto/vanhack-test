import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import { theme } from '~/styles/theme';

export type TButtonProps = {
  text: string
}

export const Button: React.FC<TButtonProps & TouchableOpacityProps> = ({ text, ...props }) => {
  return (
    <TouchableOpacity style={styles.common} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  common: {
    width: 150,
    height: 50,
    borderRadius: theme.spacing[18],
    backgroundColor: theme.colors.primary.default,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: theme.spacing[18],
    color: theme.colors.misc.white,
  }
});