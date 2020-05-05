import React from 'react';
import {View, StyleSheet} from 'react-native';

import Container from '../Core/Container';

import useBalanceSumByCategory from '../../Hooks/useBalanceSumByCategory';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({days = 7, onPressActionButton, actionButtonText}) => {
  const [balanceSum] = useBalanceSumByCategory(days);
  console.log('EntrySummary :: ', balanceSum);

  return (
    <>
      {balanceSum.length !== 0 && (
        <Container
          title="Categorias"
          actionLabelText={`Últimos ${days} dias`}
          actionButtonText={actionButtonText}
          onPressActionButton={onPressActionButton}>
          <View style={styles.inner}>
            <EntrySummaryChart data={balanceSum} />
            <EntrySummaryList data={balanceSum} />
          </View>
        </Container>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignItems: 'center',
  },
});

export default EntrySummary;
