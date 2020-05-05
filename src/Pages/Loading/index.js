import React, {useEffect} from 'react';
import {StatusBar, ActivityIndicator, View, StyleSheet} from 'react-native';

import {isInitialized} from '../../services/Welcome';

import Colors from '../../styles/Colors';

const Loading = ({navigation}) => {
  useEffect(() => {
    async function makeRedirect() {
      (await isInitialized())
        ? navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          })
        : navigation.navigate('Welcome');
    }

    makeRedirect();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ActivityIndicator color={Colors.violet} size={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
