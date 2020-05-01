import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // paddingVertical: 30,
  },

  label: {
    fontSize: 14,
    marginTop: 46,
    color: Colors.white,
    position: 'relative',
    top: -15
  },

  value: {
    zIndex: 2,
    fontSize: 56,
    color: Colors.white,
  },
})

export default BalancePanelLabel;
