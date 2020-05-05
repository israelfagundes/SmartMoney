import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import InputMoney from '../../../Components/Core/InputMoney';

import Colors from '../../../styles/Colors';

const WelcomeBalanceInput = ({value, onChangeValue}) => {
  return (
    <View>
      <Text style={styles.label}>Informe o seu saldo</Text>
      <InputMoney
        value={value}
        onChangeValue={onChangeValue}
        startWithDebit={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: 'Lato Regular',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default WelcomeBalanceInput;
