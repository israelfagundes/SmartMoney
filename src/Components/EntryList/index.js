import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import EntryListItem from './EntryListItem';

import Container from '../Core/Container';

import useEntries from '../../Hooks/useEntries';

const EntryList = ({
  days = 7,
  category,
  onEntryPress,
  onPressActionButton,
  actionButtonText,
}) => {
  const navigation = useNavigation();
  const [entries] = useEntries(days, category);

  return (
    <>
      {entries !== undefined && entries.length !== 0 && (
        <Container
          title="Últimos lançamentos"
          actionLabelText={`Últimos ${days} dias`}
          actionButtonText={actionButtonText}
          onPressActionButton={() => navigation.navigate('Report')}>
          <FlatList
            data={entries}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
              <EntryListItem
                entry={item}
                isFirstItem={index === 0}
                isLastItem={index === entries.length - 1}
                onEntryPress={(entry) => {
                  const entryToJson = JSON.parse(JSON.stringify(entry));
                  navigation.navigate('NewEntry', {
                    entry: entryToJson,
                  });
                }}
              />
            )}
          />
        </Container>
      )}
    </>
  );
};

export default EntryList;
