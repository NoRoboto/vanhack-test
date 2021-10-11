import React, { useEffect, useState, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from '~/views/home';
import { Favourites } from '~/views/favorites';
import { Storage } from '~/components/AsyncStorage/storage';
import { Onboarding } from '~/views/onboarding';
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { setOnboardingFlag } from '~/store/slices/userPreferencesSlice';
import { theme } from '~/styles/theme';
import { Layout } from '~/components/Layout';
import { loadBookmarksFromStorage, saveBookmarksToStorage } from '~/store/thunks/userPreferences';

const Tab = createBottomTabNavigator();

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
          tabBarActiveTintColor: theme.colors.primary.light,
          tabBarLabelStyle: {
            fontSize: 15,
            margin: 0,
            padding: 0,
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: tabBarIcon('format-list-numbered'),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarLabel: 'Fav',
            tabBarIcon: tabBarIcon('bookmark-check-outline'),
          }}
        />
        <Tab.Screen
          name="Applied"
          component={Favourites}
          options={{
            tabBarLabel: 'My Jobs',
            tabBarIcon: tabBarIcon('check-box-multiple-outline'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;