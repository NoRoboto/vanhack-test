import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Favourites } from '~/views/favorites';
import { Storage } from '~/components/AsyncStorage/storage';
import { Onboarding } from '~/views/onboarding';
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { setOnboardingFlag } from '~/store/slices/userPreferencesSlice';
import { theme } from '~/styles/theme';
import { Layout } from '~/components/Layout';
import { loadBookmarksFromStorage, saveBookmarksToStorage } from '~/store/thunks/userPreferences';
import { JobDetailStack, FeedStackParams } from './Feed';

export type RootStackParams = {
  HomeTab: NavigatorScreenParams<FeedStackParams>;
  FavouritesTab: undefined;
  AppliedTab: undefined;
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParams, 'HomeTab'>;

const Tab = createBottomTabNavigator<RootStackParams>();

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
    dispatch(loadBookmarksFromStorage());

    return () => {
      dispatch(saveBookmarksToStorage());
    }

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

  const tabBarIcon = (name: keyof typeof MaterialCommunityIcons.glyphMap) => (({ color, size }: { color: string, size: number }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  ));

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.primary.dark,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={JobDetailStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: tabBarIcon('format-list-numbered'),
          }}
        />
        <Tab.Screen
          name="FavouritesTab"
          component={Favourites}
          options={{
            tabBarLabel: 'Fav',
            tabBarIcon: tabBarIcon('bookmark-check-outline'),
          }}
        />
        <Tab.Screen
          name="AppliedTab"
          component={Favourites}
          options={{
            tabBarLabel: 'MyJobsTabs',
            tabBarIcon: tabBarIcon('check-box-multiple-outline'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;