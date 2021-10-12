import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import { theme } from '~/styles/theme';

export type TButtonProps = {
  text: string,
  type?: 'accept' | 'cancel'
}

export const Button: React.FC<TButtonProps & TouchableOpacityProps> = ({ text, type = 'accept',  ...props }) => {
  const variationStyle = styles[type];

  return (
    <TouchableOpacity style={[styles.common, variationStyle]} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  common: {
    width: 150,
    height: 50,
    borderRadius: theme.spacing[18],
    justifyContent: 'center',
    alignItems: 'center'
  },
  accept: {
    backgroundColor: theme.colors.primary.default,
  },
  cancel: {
    backgroundColor: theme.colors.misc.error,
  },
  text: {
    fontSize: theme.spacing[18],
    color: theme.colors.misc.white,
  }
});