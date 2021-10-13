import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { theme } from '~/styles/theme';

export const VideoPlayer: React.FC<{ uri: string }> = ({ uri }) => {
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri,
        }}
        useNativeControls
        shouldPlay
        resizeMode="contain"
        isLooping
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 0.5
  },
  video: {
    flex: 1,
  },
});
