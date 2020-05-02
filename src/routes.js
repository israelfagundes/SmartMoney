import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from './Pages/Loading';
import Welcome from './Pages/Welcome';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Loading">
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

// const Routes = createAppContainer(
//   createStackNavigator(
//     {
//       Loading,
//       Welcome,
//       Main,
//       NewEntry,
//       Report,
//     },
//     {
//       initialRouteName: 'Loading',
//       defaultNavigationOptions: {
//         headerShown: false
//       }
//     },
//   ),
// );

export default Routes;
