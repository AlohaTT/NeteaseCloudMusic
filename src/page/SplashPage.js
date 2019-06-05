/*
 * @Author: Tony
 * @Date: 2019-06-03 15:59:31
 * @Last Modified by: Tony
 * @Last Modified time: 2019-06-04 16:51:55
 */
import React, { Component, } from 'react';
import { View, Text, PermissionsAndroid, } from 'react-native';
import PropTypes from 'prop-types';

async function requestMultiplePermission(navigation) {
  try {
    const permissions = [
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.CAMERA,
    ];
    //返回得是对象类型
    const granteds = await PermissionsAndroid.requestMultiple(permissions);
    if (granteds['android.permission.READ_EXTERNAL_STORAGE'] === 'granted' &&
      granteds['android.permission.READ_PHONE_STATE'] === 'granted') {
      this.timer = setTimeout(() => {
        navigation.navigate('Main');
      }, 200);
    }
  } catch (err) {
    this.show(err.toString());
  }
}

export default class SplashPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  componentDidMount() {
    const { navigation, } = this.props;
    // this.timer = setTimeout(() => {
    //   navigation.navigate('Main');
    // }, 200);
    requestMultiplePermission(navigation);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    );
  }
}

