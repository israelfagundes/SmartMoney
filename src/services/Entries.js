import {Alert} from 'react-native';
import {getRealm} from './Realm';

import {getUUID} from './UUID';

import moment from '../vendors/moment';

export const getEntries = async (days, category) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();

    realm = realm.filtered('entryAt >= $0', date);

    console.log('getEntries :: days', days);
  }

  if (category && category.id) {
    realm = realm.filtered('category == $0', category);

    console.log('getEntries :: category', JSON.stringify(category));
  }

  const entries = realm.sorted('entryAt', true);

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
        address: value.address || entry.address,
        latitude: value.latitude || entry.latitude,
        longitude: value.longitude || entry.longitude,
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
