import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

import {
  getDebitCategories,
  getCreditCategories,
} from '../../../services/Categories';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
    }

    loadCategories();
    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={debit ? debitCategories : creditCategories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onCategoryPress(item)}
                style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: 40,
  },
  pickerButton: {
    marginHorizontal: 25,
    backgroundColor: Colors.asphalt,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 35,
  },
  pickerButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 28,
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
    color: Colors.white,
    textAlign: 'center',
    fontSize: 22,
  },
  closeButton: {
    marginTop: 20,
    marginBottom: -20,
    borderWidth: 2,
    borderColor: Colors.green,
    borderRadius: 30,
    backgroundColor: Colors.background,
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 30,
  },
  closeButtonText: {
    textAlign: 'center',
    color: Colors.green,
    fontSize: 14,
  },
});

export default NewEntryCategoryPicker;
