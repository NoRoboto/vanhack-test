import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';

import { saveListToStorage } from '~/store/thunks/userPreferences';
import { applyJob } from '~/store/slices/userPreferencesSlice';
import { useAppDispatch } from '~/store/hooks';

import { Button } from '~/components/Button';
import { Camera } from '~/components/Camera';
import { CustomModal } from '~/components/Modal';
import { CustomText } from '~/components/Text';
import { VideoPlayer } from '~/components/VideoPlayer';
import { theme } from '~/styles/theme';
import { ModalConfirmation } from './ModalConfirmation';
import { FeedStackParams } from '~/routes/Feed';
import { RootNavigationProps } from '~/routes/AppStack';

export const Video: React.FC = () => {
  const { goBack } = useNavigation<RootNavigationProps>();
  const { params } = useRoute<RouteProp<FeedStackParams, 'Details'>>();
  const { item } = params;
  const dispatch = useAppDispatch();

  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(true);
  const [initCamera, setInitCamera] = useState<boolean>(false);
  const [recordedUri, setRecordedUri] = useState<string>('');
  const onAccept = () => {
    setShowConfirmModal(false);
    setInitCamera(true);
  }
  const onRecFinish = (uri: string) => {
    setRecordedUri(uri);
    setInitCamera(false); // reinit camera.
  }
  const onCancel = () => {
    setRecordedUri('');
    setInitCamera(true); // reinit camera.
  }
  const onSendVideo = () => {
    dispatch(applyJob(item));
    dispatch(saveListToStorage({ list: 'jobApplicationList', key: 'jobs' }));
    Alert.alert('Successful application');
    goBack();
  }

  return (
    <View style={styles.viewContainer}>
      <CustomModal showModal={showConfirmModal}>
        <ModalConfirmation onAccept={onAccept} />
      </CustomModal>
      {initCamera && <Camera onRecFinish={onRecFinish} />}
      {!!recordedUri && (
        <CustomModal showModal={!!recordedUri}>
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Text style={{ textAlign: 'center', paddingTop: theme.spacing[12] }}>
              <CustomText message='Your Preview' variant='header' />
            </Text>
            <VideoPlayer uri={recordedUri} />
            <Text style={{ textAlign: 'center' }}>
              <CustomText message='Do you want to send this video ? 🎥' variant='simpleHeader' />
            </Text>
            <View style={styles.buttonContainer}>
              <Button text='Accept' onPress={onSendVideo} />
              <Button text='Cancel' type='cancel' onPress={onCancel} />
            </View>
          </View>
        </CustomModal>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  }
});
