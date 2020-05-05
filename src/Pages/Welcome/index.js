import React, {useState} from 'react';
import {StatusBar, View, Image, StyleSheet} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../Components/Core/ActionFooter';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

import useCategories from '../../Hooks/useCategories';

import {saveEntry} from '../../services/Entries';
import {setInitialized} from '../../services/Welcome';

import Colors from '../../styles/Colors';
import Logo from '../../assets/logo-white.png';

const Welcome = ({navigation}) => {
  const [, , , initCategories] = useCategories();
  const [value, setValue] = useState(0);

  const onSavePress = () => {
    saveEntry({
      amount: parseFloat(value),
      isInit: true,
      category: initCategories,
    });

    setInitialized();
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <View style={styles.logo}>
        <Image source={Logo} style={styles.img} />
      </View>
      <View>
        <WelcomeMessage />
        <WelcomeBalanceInput value={value} onChangeValue={setValue} />
        <View style={styles.action}>
          <ActionFooter>
            <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
          </ActionFooter>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
    justifyContent: 'center',
    marginTop: -50,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
  action: {
    marginTop: 20,
  }
});

export default Welcome;
