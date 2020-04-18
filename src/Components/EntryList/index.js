import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Button, StyleSheet} from 'react-native';

//import EntryListItem from './EntryListItem';

import {getEntries} from '../../services/Entries';

const EntryList = ({navigation}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }
    loadEntries();
    console.log('EntryList :: useEffect');
  }, []);

  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            <Text style={styles.entry}>
              {item.description}: ${item.amount}
            </Text>
            <Button
              title={item.id}
              onPress={() => {
                navigation.navigate('NewEntry', {entry: item});
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
  },
});

export default EntryList;
