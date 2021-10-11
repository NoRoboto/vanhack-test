import React from 'react';
import { StyleSheet } from 'react-native';
import Flags from "react-native-country-flag";

export const CountryFlag = ({ flagCode }: { flagCode: string }) => {
  return (
    <Flags
      style={styles.countryFlag}
      isoCode={flagCode}
      size={20}
    />
  );
}

const styles = StyleSheet.create({
  countryFlag: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    borderRadius: 10,
  }
});