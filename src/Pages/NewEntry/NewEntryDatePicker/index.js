import React, {useState} from 'react';
import {Platform, View, TouchableOpacity, StyleSheet} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryDatePicker = ({value, onChange}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeValue = (date) => {
    setModalVisible(Platform.OS === 'ios');
    onChange(date);
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Icon name="today" size={35} color={Colors.white} />
      </TouchableOpacity>

      <DateTimePickerModal
        mode="date"
        titleIOS="Data de Vancimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        date={value}
        isVisible={modalVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.asphalt,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewEntryDatePicker;
