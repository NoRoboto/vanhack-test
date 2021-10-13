import React from 'react'
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Button } from '~/components/Button';
import { CustomText } from '~/components/Text';

import COPY from '~/data/copy';
import { theme } from '~/styles/theme';

export const ModalConfirmation: React.FC<{ onAccept: () => void }> = ({ onAccept }) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.contentWrapper} style={styles.wrapper}>
      <Image style={styles.image} resizeMode='cover' source={require('assets/others/camera.gif')} />
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>
          <CustomText 
            variant='header'
            message={COPY.cameraTitle}
          />
          <CustomText 
            variant='simpleHeader'
            message={COPY.cameraText}
          />
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button text='Accept' onPress={onAccept} />
        <Button text='Cancel' type='cancel' onPress={navigation.goBack} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    flexGrow: 1,
    justifyContent: 'space-around'
  },
  wrapper: {
   
  },
  image: {
    width: '100%',
    height: 200,
  },
  sectionContainer: {
    marginHorizontal: theme.spacing[24]
  },
  text: {
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
