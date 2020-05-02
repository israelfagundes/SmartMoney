import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const WelcomeMessage = () => {
  return (
    <View>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.message}>
        Para começar a usar o Smart Money, insira o saldo com o qual deseja
        iniciar. Vamos lá?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 38,
    textAlign: 'center',
    marginTop: 40,
  },
  message: {
    color: Colors.white,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
});

export default WelcomeMessage;
