import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';

const unlockedContent = createStackNavigator(
  {
    Main,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42BBFF',
      },
      headerTintColor: '#FFF',
    },
  }
);

const lockedContent = createSwitchNavigator({
  Login,
});

const allContent = createSwitchNavigator({
  Authentication: {
    screen: lockedContent,
  },
  App: {
    screen: unlockedContent,
  },
});

const Routes = createAppContainer(allContent);

export default Routes;
