import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import Colors from '../../../styles/Colors';

const InputMoney = ({
  value,
  startWithDebit = true,
  onChangeDebit,
  onChangeValue,
  isValid,
}) => {
  const setDefaultDebit = () => {
    if (value === 0) {
      return startWithDebit ? -1 : 1;
    } else {
      return value <= 0 ? -1 : 1;
    }
  };

  const setDefaultDebitPrefix = () => {
    if (value === 0) {
      return startWithDebit ? '-' : '';
    } else {
      return value <= 0 ? '-' : '';
    }
  };

  const [debit, setDebit] = useState(setDefaultDebit);
  const [debitPrefix, setDebitPrefix] = useState(setDefaultDebitPrefix);

  const onChangeDebitCredit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit && onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit && onChangeDebit(true);
    }

    onChangeValue(value * -1);
  };

  return (
    <View style={[styles.container, isValid ? '' : styles.notValid]}>
      <TouchableOpacity
        style={styles.debitButton}
        onPress={onChangeDebitCredit}>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: debitPrefix,
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 25,
    backgroundColor: Colors.asphalt,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.asphalt,
  },
  notValid: {
    borderColor: Colors.danger,
  },
  debitButton: {
    flexDirection: 'row',
    paddingVertical: 24,
  },
  debitButtonPrefix: {
    fontSize: 38,
    fontFamily: 'Lato Bold',
    color: Colors.white,
  },
  debitButtonText: {
    fontSize: 38,
    fontFamily: 'Lato Bold',
    color: Colors.white,
  },
  input: {
    flex: 1,
    textAlign: 'right',
    fontSize: 38,
    fontFamily: 'Lato Bold',
    color: Colors.white,
    paddingVertical: 24,
  },
});

export default InputMoney;
