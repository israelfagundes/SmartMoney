import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';

import Colors from '../../../styles/Colors';

const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangePhotoPress = (newPhoto) => {
    onChangePhoto(newPhoto);
    onClosePress();
  };

  const onDeletePicturePress = () => {
    onChangePhoto(null);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, photo ? styles.buttonActivated : '']}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Icon name="photo-camera" size={35} color={Colors.white} />
      </TouchableOpacity>
      <NewEntryCameraPickerModal
        photo={photo}
        isVisible={modalVisible}
        onChangePhoto={onChangePhotoPress}
        onDelete={onDeletePicturePress}
        onClose={onClosePress}
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
  buttonActivated: {
    backgroundColor: Colors.blue,
  },
});

export default NewEntryCameraPicker;
