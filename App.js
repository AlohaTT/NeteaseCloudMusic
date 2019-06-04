/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, } from 'react';
import AppNavigator from './src/navigator/AppNavigators';
import { Provider, } from 'react-redux';
import store from './src/store/index';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}