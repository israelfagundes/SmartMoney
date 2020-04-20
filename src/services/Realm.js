import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {getDefaultCategories} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2,
  });

  initDB(realm);

  return realm;
};

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length;
  console.log(`initDB :: Categories length: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    console.log('initDB :: initing gb...');

    try {
      realm.write(() => {
        for (category of categories) {
          console.log(
            `initDB :: Creating category: ${JSON.stringify(category)}`,
          );
          realm.create('Category', category, true);
        }
      });
    } catch (error) {
      console.error('initDB :: failed to write categories on database.');
    }
  } else {
    console.log('initDB :: categories already exists...');
    // console.log(getDefaultCategories());
  }
};

export const dropDB = realm => {
  console.log('dropDB :: dropping db...');
  realm.write(() => {
    realm.deleteAll();
  });
};
