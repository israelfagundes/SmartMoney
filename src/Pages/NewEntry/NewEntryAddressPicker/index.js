import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding'; 

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryAddressPicker = ({address, onChange}) => {
  const key = 'AIzaSyDfZiJLZe5VqCzX7hbtXP7NXIbPb2kuVXo';

  const getLocation = (latitude, longitude) => {
    Geocoder.init(key);

    Geocoder.from({latitude, longitude})
      .then((json) => {
        const formattedAddress = json.results[0].formatted_address;
        Alert.alert('Localização', formattedAddress, [
          {
            text: 'Cancelar',
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: 'Confirmar',
            onPress: () => {
              onChange({
                latitude: latitude,
                longitude: longitude,
                address: formattedAddress,
              });
            },
          },
        ]);
      })
      .catch((error) => {
        console.error(
          'NewEntryAddressPicker :: getLocation :: error while getting location',
          error,
        );
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        getLocation(latitude, longitude);
      },
      (error) => {
        console.error(
          'NewEntryAddressPicker :: getPosition :: error while getting position',
          error,
        );
        Alert.alert(
          'Erro ao recuperar localização, por favor, verifique as permissões do aplicativo.',
        );
      },
    );
  };

  const onButtonPress = () => {
    if (address) {
      Alert.alert('Localização', address, [
        {
          text: 'Apagar',
          style: 'cancel',
          onPress: () => {
            onChange({latitude: null, longitude: null, address: ''});
          },
        },
        {text: 'Ok', onPress: () => console.log('Ok Pressed')},
      ]);
    } else {
      getPosition();
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, address ? styles.buttonActivated : '']}
        onPress={onButtonPress}>
        <Icon name="location-on" size={35} color={Colors.white} />
      </TouchableOpacity>
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

export default NewEntryAddressPicker;
