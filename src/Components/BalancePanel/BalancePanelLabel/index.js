import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

import Currency from '../../Core/Currency';

import Colors from '../../../styles/Colors';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>
        <Currency value={currentBalance} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  label: {
    fontSize: 16,
    fontFamily: 'Lato Regular',
    marginTop: 50,
    color: Colors.white,
    position: 'relative',
    top: -15
  },

  value: {
    zIndex: 2,
    fontSize: 56,
    fontFamily: 'Lato Regular',
    color: Colors.white,
  },
})

export default BalancePanelLabel;
