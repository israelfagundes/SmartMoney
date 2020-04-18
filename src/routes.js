import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerShown: false
      }
    },
  ),
);

export default Routes;
