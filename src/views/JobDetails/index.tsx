import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export const JobDetails = () => {
  const { goBack } = useNavigation();

  return (
    <View>
      <Button title='go back' onPress={goBack} />
      <Text>Job Details</Text>
    </View>
  );
};

