import React from 'react';
import {
  StatusBar,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import useCategories from '../../Hooks/useCategories';

import Colors from '../../styles/Colors';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, creditCategories, allCategories] = useCategories();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.asphalt} />
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <View style={styles.modal}>
          <FlatList
            data={
              categoryType === 'all'
                ? allCategories
                : categoryType === 'debit'
                ? debitCategories
                : creditCategories
            }
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onConfirm(item)}
                style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onCancel} />
          </ActionFooter>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
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

export default CategoryModal;
