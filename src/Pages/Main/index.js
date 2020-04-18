import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
// import NewEntry from '../NewEntry';

import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  const currentBalance = 2064.35;

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
});

export default Main;
