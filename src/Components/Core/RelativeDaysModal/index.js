import React from 'react';
import {
  StatusBar,
  Modal,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import ActionFooter, {ActionPrimaryButton} from '../ActionFooter';

import Colors from '../../../styles/Colors';

const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <View style={styles.modal}>
        <FlatList
          data={relativeDays}
          keyExtractor={(item) => item.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={styles.modalItemText}>{`${item} dias`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={onCancel} />
      </ActionFooter>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    marginHorizontal: 25,
    backgroundColor: Colors.asphalt,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 10,
  },
  modalItemText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Lato Regular',
    fontSize: 22,
  },
});

export default RelativeDaysModal;
