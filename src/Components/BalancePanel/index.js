import React from 'react';
import {StatusBar, View, TouchableOpacity, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome5';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import useBalance from '../../Hooks/useBalance';

import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.violetLight}
      />
      <LinearGradient
        colors={[Colors.violetLight, Colors.seaBlue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="plus" size={27} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: -27,
  },
  button: {
    backgroundColor: Colors.green,
    width: 55,
    height: 55,
    borderRadius: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    elevation: 7,
    marginTop: -25,
    marginRight: 15,
    zIndex: 99,
  },
});

export default BalancePanel;
