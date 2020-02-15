import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '~/styles';

import Login from './pages/Login';
import Main from './pages/Main';

const unlockedContent = createStackNavigator(
  {
    Main,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.background,
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
