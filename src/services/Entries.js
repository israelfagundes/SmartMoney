import {Alert} from 'react-native';
import {getRealm} from './Realm';

import {getUUID} from './UUID';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry').sorted('entryAt', true);

  console.log('getEntries :: entries ', JSON.stringify(entries));

  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        description: value.category.name || entry.category.name,
        isInit: false,
        category: value.category || entry.category,
      };

      realm.create('Entry', data, true);
    });

    console.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error on save object ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};

export const deleteEntry = async (entry) => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error(
      'deleteEntry :: error on delete object ',
      JSON.stringify(entry),
    );
    Alert.alert('Erro ao excluir este lançamento.');
  }
};
