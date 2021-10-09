import React from 'react';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { QueryClientProvider } from 'react-query';
import { StatusBar } from 'expo-status-bar';
import { Provider as ReduxProvider } from 'react-redux';

import { Onboarding } from '~/views/onboarding';
import { queryClient } from '~/api';
import AppStack from '~/routes/AppStack';
import { store } from '~/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style='inverted' />
          <AppStack />
        </SafeAreaView>
      </QueryClientProvider>
    </ReduxProvider>
  );
}