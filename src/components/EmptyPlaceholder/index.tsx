import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { CustomText } from '../Text';
import COPY from '~/data/copy';

export const EmptyPlaceholder: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain' 
        style={styles.image}
        source={require('assets/list/empty.png')}
      />
      <Text style={styles.text} >
        <CustomText variant='subtitle' message={COPY.emptyList} />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: 300,
  },
  text: { 
    textAlign: 'center' 
  }
});