import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '~/views/home';
import { Storage } from '~/components/AsyncStorage/storage';
import { Onboarding } from '~/views/onboarding';
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { setOnboardingFlag } from '~/store/slices/userPreferencesSlice';
import { theme } from '~/styles/theme';
import { Layout } from '~/components/Layout';

const Stack = createNativeStackNavigator();

function AppStack() {
  const userPreferences = useAppSelector((state) => state.userPreferences);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const checkOnboardingStatus = () => {
    Storage.getData<boolean>('onboarding').then((value) => {
      dispatch(setOnboardingFlag(!Boolean(value)))
      setLoading(false);
    });
  }

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  if (loading) {
    return (
      <Layout.CenterContainer>
        <ActivityIndicator size='large' color={theme.colors.primary.default} />
      </Layout.CenterContainer>
    );
  }

  if (userPreferences.showOnboarding) {
    return <Onboarding />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;