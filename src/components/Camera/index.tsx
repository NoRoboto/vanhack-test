import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import { CustomText } from '../Text';
import { theme } from '~/styles/theme';
import { Icon } from '../CircleIcon';
import { RecBanner } from './RecBanner';

export const Camera: React.FC<{ onRecFinish: (uri: string) => void }> = ({ onRecFinish }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState<null | boolean>(null);
  const [hasAudioPermission, setHasAudioPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);
  const [status, setStatus] = useState<'recoding' | 'stopped'>('stopped');
  const expoCameraRef = useRef<ExpoCamera | null>();

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');

      const audioStatus = await ExpoCamera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');
    })();
  }, []);

  const onChangeCameraType = () => {
    setType(
      type === ExpoCamera.Constants.Type.back
        ? ExpoCamera.Constants.Type.front
        : ExpoCamera.Constants.Type.back
    );
  }

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return null;
  }

  if (hasCameraPermission === false) {
    return <CustomText  message='You need grant Camera permissions to perform this action' variant='bodyCard' />
  }

  if (hasAudioPermission === false) {
    return <CustomText  message='You need grant Audio permissions to perform this action' variant='bodyCard' />
  }

  const recVideo = async () => {
    if (expoCameraRef.current) {
      setStatus('recoding');
      const data = await expoCameraRef.current.recordAsync({
        maxDuration: 180,
      });

      setStatus('stopped');
      onRecFinish(data.uri);
    }
  }

  const stopVideo = () => {
    if (expoCameraRef.current) {
      expoCameraRef.current?.stopRecording();
      setStatus('stopped');
    }
  }

  return (
    <>
      <ExpoCamera
        ref={ref => { expoCameraRef.current = ref }} 
        style={styles.camera}
        type={type}
      >
        {status === 'recoding' && <RecBanner />}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <View style={styles.fakeBtn} />
            <TouchableOpacity 
              style={[styles.cameraRecButton, status === 'recoding' && styles.cameraRecStoppedButton]}
              onPress={status === 'recoding' ? stopVideo : recVideo}
            />
            <TouchableOpacity onPress={onChangeCameraType}>
              <Icon name={type === ExpoCamera.Constants.Type.back ? 'camera-front' : 'camera-outline'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ExpoCamera>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '95%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: theme.spacing[16]
  },
  buttonWrapper: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cameraRecButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red'
  },
  cameraRecStoppedButton: {
    borderRadius: 0,
  },
  fakeBtn: {
    width: 20,
  },
});
