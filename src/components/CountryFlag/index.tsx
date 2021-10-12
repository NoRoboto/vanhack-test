import React from 'react';
import { StyleSheet } from 'react-native';
import Flags from "react-native-country-flag";

export const CountryFlag = ({ flagCode, width = 20, height = 20 }: { flagCode: string, width?: number, height?: number }) => {
  return (
    <Flags
      style={[styles.countryFlag, { width, height }]}
      isoCode={flagCode}
      size={0}
    />
  );
}

const styles = StyleSheet.create({
  countryFlag: {
    alignSelf: 'center',
    borderRadius: 10,
  }
});