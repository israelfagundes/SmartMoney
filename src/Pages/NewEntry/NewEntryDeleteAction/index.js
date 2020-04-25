import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryDeleteAction = ({entry, onOkPress}) => {
  const onDelete = () => {
    Alert.alert(
      'Apagar?',
      'Apagar lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false},
    );
  };
  return (
    entry.id && (
      <View>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Icon name="delete" size={35} color={Colors.white} />
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.red,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewEntryDeleteAction;
