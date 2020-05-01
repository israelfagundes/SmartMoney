import React from 'react';
import {View, StyleSheet} from 'react-native'

import Container from '../Core/Container';

import useBalanceSumByCategory from '../../Hooks/useBalanceSumByCategory';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({days = 7, onPressActionButton}) => {
  const [balanceSum] = useBalanceSumByCategory(days);
  
  return (
    <Container
      title="Categorias"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <View style={styles.inner}>
        <EntrySummaryChart data={balanceSum} />
        <EntrySummaryList data={balanceSum} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignItems: 'center'
  }
})

export default EntrySummary;
