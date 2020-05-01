import React from 'react';
import {View, StyleSheet} from 'react-native';

import {BarChart} from 'react-native-svg-charts';

import useBalanceSumByDate from '../../../Hooks/useBalanceSumByDate';

const BalancePanelChart = () => {
  const [balanceSum] = useBalanceSumByDate();

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={balanceSum}
        svg={{
          fill: 'rgba(0, 0, 0, 0.1)',
          stroke: 'rgba(0, 0, 0, 0.1)',
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  chart: {
    height: 60,
  },
});

export default BalancePanelChart;