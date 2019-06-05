/*
 * @Author: Tony
 * @Date: 2019-06-03 15:59:26
 * @Last Modified by: Tony
 * @Last Modified time: 2019-06-04 17:13:07
 */
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, } from 'react-navigation';
import SplashPage from '../page/SplashPage';
import { createNavigationReducer, createReduxContainer, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import { connect, } from 'react-redux';
import HomePage from '../page/HomePage';
import LoginPage from '../page/LoginPage';
import PhoneLoginPage from '../page/PhoneLoginPage';
import PasswordPage from '../page/PasswordPage';
import SettingPage from '../page/SettingPage';
import SearchPage from '../page/SearchPage';

const HomeNavigator = createDrawerNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
}, {
  contentComponent: SettingPage,
});

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      header: null,
    },
  },
  PhoneLogin: {
    screen: PhoneLoginPage,
    navigationOptions: {
      title: '手机号登录',
    },
  },
  Password: {
    screen: PasswordPage,
  },
  Search: {
    screen: SearchPage,
  },
});

const SplashNavigator = createStackNavigator({
  Splash: {
    screen: SplashPage,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const AppNavigator = createSwitchNavigator({
  Splash: SplashNavigator,
  Main: MainNavigator,
});

export const navReducer = createNavigationReducer(AppNavigator);

export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppContainer = createReduxContainer(AppNavigator);

export default connect(mapStateToProps)(AppContainer);