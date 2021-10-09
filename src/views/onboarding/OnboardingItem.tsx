import React from 'react'
import { StyleSheet, Image, useWindowDimensions } from 'react-native'

import { CustomText as Text } from '~/components/Text';
import { IOnboardingItem } from '~/data/onboarding';
import { Layout } from '~/components/Layout';
import { Button } from "~/components/Button";
import COPY from '~/data/copy';
import { theme } from '~/styles/theme';
import { useAppDispatch } from '~/store/hooks';
import { setOnboardingFlag } from '~/store/slices/userPreferencesSlice'; 
import { Storage } from '~/components/AsyncStorage/storage';

export const OnboardingItem: React.FC<{ item: IOnboardingItem, isLastItem: boolean }> = ({ item, isLastItem }) => {
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const onContinue = async () => {
    await Storage.storeData<boolean>(true, 'onboarding');
    dispatch(setOnboardingFlag(false));
  }

  return (
    <Layout.CenterContainer styleProps={{ width, alignContent: 'stretch' }}>
      <Text variant='title' message={item.title} />
      <Text variant='subtitle' message={item.description} />
      <Image source={item.gif} style={[styles.image, { width, resizeMode: 'contain' }]} />
      <Layout.CenterContainer styleProps={styles.buttonWrapper}>
        {isLastItem && (<Button text={COPY.onboarding.button} onPress={onContinue} />)}
      </Layout.CenterContainer>
    </Layout.CenterContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginBottom: theme.spacing[24],
  }
});