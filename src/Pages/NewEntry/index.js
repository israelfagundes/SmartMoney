import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalanceLabel from '../../Components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';

import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';

import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
    category: {id: null, name: 'Selecione'},
  });

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
    };
    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
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
      <BalanceLabel />
      <View>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
