import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IJobItemProp } from '~/api/getJobList';
import { JobDetails } from '~/views/JobDetails';
import { Home } from '~/views/home';
import { Video } from '~/views/video';
 
export type FeedStackParams = {
  Feed: undefined;
  Details: { item: IJobItemProp };
  Video: { item: IJobItemProp };
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
      <Stack.Screen name="Video" component={Video} />
    </Stack.Navigator>
  );
}
