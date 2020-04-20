import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  const currentBalance = 2064.65;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient
        style={styles.panel}
        colors={['#756fc3', Colors.seaBlue, Colors.seaBlue]}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
    marginTop: 40,
    marginBottom: 10,
  },
  panel: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 80,
  },
  value: {
    fontSize: 32,
    color: Colors.white,
  },
});

export default BalanceLabel;
