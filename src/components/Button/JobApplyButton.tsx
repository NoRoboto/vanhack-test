import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { getMemoizedAppliedIds, removeApplication } from '~/store/slices/userPreferencesSlice';

import { IJobItemProp } from '~/api/getJobList';
import { Button } from './index';
import { RootNavigationProps } from '~/routes/AppStack';

export const JobApplyButton: React.FC<{ item: IJobItemProp }> = ({ item }) => {
  const { navigate } = useNavigation<RootNavigationProps>();
  const dispatch = useAppDispatch();
  const appliedJobs = useAppSelector((state) => getMemoizedAppliedIds(state.userPreferences));
  const alreadyApplied = appliedJobs.includes(item.id);

  const onApply = () => {
    if (alreadyApplied) {
      dispatch(removeApplication(item.id));
      return;
    }
  
    navigate('HomeTab', { screen: 'Video', params: { item } });
  }

  return <Button text={!alreadyApplied ? 'Apply' : 'Cancel' } onPress={onApply} type={alreadyApplied ? 'cancel' : 'accept' } />;
}
