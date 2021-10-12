import React from 'react';

import { saveListToStorage } from '~/store/thunks/userPreferences';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { applyJob, getMemoizedAppliedIds, removeApplication } from '~/store/slices/userPreferencesSlice';

import { IJobItemProp } from '~/api/getJobList';
import { Button } from './index';

export const JobApplyButton: React.FC<{ item: IJobItemProp }> = ({ item }) => {
  const dispatch = useAppDispatch();
  const appliedJobs = useAppSelector((state) => getMemoizedAppliedIds(state.userPreferences));
  const alreadyApplied = appliedJobs.includes(item.id);

  const onApply = () => {
    if (alreadyApplied) {
      dispatch(removeApplication(item.id));
      return;
    }

    dispatch(applyJob(item));
    dispatch(saveListToStorage({ list: 'jobApplicationList', key: 'jobs' }));
  }

  return <Button text={!alreadyApplied ? 'Apply' : 'Cancel' } onPress={onApply} type={alreadyApplied ? 'cancel' : 'accept' } />;
}
