import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Charge from '~/pages/Charge';
import Login from '~/pages/Login';
import Main from '~/pages/Main';
import SignUp from '~/pages/SignUp';
import { colors } from '~/styles';

const unlockedContent = createStackNavigator(
  {
    Main,
    Charge,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: '#FFF',
    },
  }
);

const lockedContent = createSwitchNavigator({
  Login,
  SignUp,
});

const allContent = createSwitchNavigator({
  Authentication: {
    screen: lockedContent,
  },
  App: {
    screen: unlockedContent,
    navigationOptions: {
      headerBackTitleVisible: false,
      headerShown: false,
    },
  },
});

const Routes = createAppContainer(allContent);

export default Routes;
