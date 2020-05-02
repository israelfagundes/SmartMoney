import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Loading from './Pages/Loading';
import Welcome from './Pages/Welcome';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Loading,
      Welcome,
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Loading',
      defaultNavigationOptions: {
        headerShown: false
      }
    },
  ),
);

export default Routes;
