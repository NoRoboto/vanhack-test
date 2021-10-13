import React from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import { theme } from '~/styles/theme';

export const CustomModal: React.FC<{ showModal: boolean}> = ({ children, showModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      style={styles.modal}
    >
      <View style={styles.container}>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: theme.spacing[20],
    borderRadius: theme.spacing[20],
    backgroundColor: theme.colors.background.default,
    borderColor: theme.colors.background.dark,
    borderWidth: 1,
  },
  modal: {
  }
});