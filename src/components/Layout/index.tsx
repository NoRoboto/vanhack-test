import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { theme } from '~/styles/theme';

const CenterContainer: React.FC<{ styleProps?: StyleProp<ViewStyle> }> = ({ children, styleProps }) => {
  return <View style={[styles.centerContainer, styleProps]}>
    {children}
  </View>;
}

const ViewWrapper: React.FC<{ styleProps?: StyleProp<ViewStyle> }> = ({ children, styleProps }) => {
  return <View style={[styles.wrapper, styleProps]}>
    {children}
  </View>;
}

const BodyWrapper: React.FC<{ styleProps?: StyleProp<ViewStyle> }> = ({ children, styleProps }) => {
  return <View style={[styles.body, styleProps]}>
    {children}
  </View>;
}


export const Layout = {
  CenterContainer: CenterContainer,
  ViewWrapper: ViewWrapper,
  Body: BodyWrapper,
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.default,
    paddingHorizontal: theme.spacing[24]
  },
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.background.default,
    paddingHorizontal: theme.spacing[24]
  },
  body: {
    flex: 1,
    backgroundColor: theme.colors.background.default,
    marginTop: theme.spacing[20],
  }
});