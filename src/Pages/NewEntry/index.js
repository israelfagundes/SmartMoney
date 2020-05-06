import React, {useState} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../Components/Core/ActionFooter';

import BalanceLabel from '../../Components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryCameraPicker from './NewEntryCameraPicker';
import NewEntryAddressPicker from './NewEntryAddressPicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';

import useEntries from '../../Hooks/useEntries';

import Colors from '../../styles/Colors';

const NewEntry = ({route, navigation}) => {
  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: '0.00',
        photo: null,
        address: null,
        latitude: null,
        longitude: null,
        category: {id: null, name: 'Selecione'},
      };

  const [, saveEntry, deleteEntry] = useEntries();

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(
    entry.entryAt ? new Date(entry.entryAt) : new Date(),
  );
  const [photo, setPhoto] = useState(entry.photo);
  const [address, setAddress] = useState(entry.address);
  const [latitude, setLatitude] = useState(entry.latitude);
  const [longitude, setLongitude] = useState(entry.longitude);
  const [validCategory, setValidCategory] = useState(true);
  const [validInput, setValidInput] = useState(true);

  const isValid = () => {
    if (parseFloat(amount) !== 0 && category.id !== null) {
      return true;
    }

    setValidInput(false);
    setValidCategory(false);
    return false;
  }

  const onSave = () => {
    const data = {
      id: entry.id,
      amount: parseFloat(amount),
      category: category,
      photo: photo,
      address: address,
      latitude: latitude,
      longitude: longitude,
      entryAt: entryAt,
    };
    console.log('NewEntry :: save ', data);
    saveEntry(data);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <BalanceLabel />
      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
          isValid={validInput}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
          isValid={validCategory}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryCameraPicker photo={photo} onChangePhoto={setPhoto} />
          <NewEntryAddressPicker
            address={address}
            onChange={({latitude, longitude, address}) => {
              setLatitude(latitude);
              setLongitude(longitude);
              setAddress(address);
            }}
          />
          <NewEntryDeleteAction entry={entry} onOkPress={onDelete} />
        </View>
      </View>
      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <ActionSecondaryButton title="Cancelar" onPress={onClose} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
    paddingTop: 30,
  },

  formContainer: {
    flex: 1,
    marginTop: 60,
  },

  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

export default NewEntry;
