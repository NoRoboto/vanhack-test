import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IJobItemProp } from '~/api/getJobList';
import { JobDetails } from '~/views/JobDetails';
import { Home } from '~/views/home';

export type FeedStackParams = {
  Feed: undefined;
  Details: { item: IJobItemProp };
  Video: undefined;
};

export type FeedStackNavigationProps = NativeStackNavigationProp<FeedStackParams, 'Feed'>;

const Stack = createNativeStackNavigator<FeedStackParams>();

export const JobDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Feed'
    >
      <Stack.Screen name="Feed" component={Home} />
      <Stack.Screen name="Details" component={JobDetails} />
    </Stack.Navigator>
  );
}
