import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';

import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary
        actionButtonText="Ver mais"
        onPressActionButton={() => navigation.navigate('Report')}
      />
      <View style={styles.listContainer}>
        <EntryList actionButtonText="Ver mais" listHeigth="39%" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    flex: 1,
    maxHeight: '40%',
  },
});

export default Main;
