import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const ActionFooter = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 20,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderWidth: 2,
    borderColor: Colors.green,
    borderRadius: 30,
    paddingVertical: 13,
    paddingHorizontal: 35,
  },
  primaryButtonText: {
    textAlign: 'center',
    color: Colors.green,
    fontSize: 16,
  },
  secondaryButton: {
    paddingVertical: 13,
    paddingHorizontal: 30,
  },
  secondaryButtonText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 16,
  },
});

export default ActionFooter;
