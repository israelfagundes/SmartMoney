import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Svg, {Circle} from 'react-native-svg';

import Colors from '../../../../styles/Colors';

const EntrySummaryListItem = ({entry}) => {
  const bulletColor = entry.category.color || Colors.white;
  return (
    <View style={styles.container}>
      <Svg height="20" width="22">
        <Circle
          cx="10"
          cy="10"
          r="8"
          stroke={Colors.background}
          strokeWidth="1"
          fill={bulletColor}
        />
      </Svg>
      <Text style={styles.name}>{entry.category.name}</Text>
      <Text style={styles.value}>{entry.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    paddingVertical: 5,
    alignItems: 'center'
  },
  name: {
    flex: 1,
    fontSize: 13,
    color: Colors.white,
    marginLeft: 7,
  },
  value: {
    fontSize: 13,
    color: Colors.white,
  },
});

export default EntrySummaryListItem;
