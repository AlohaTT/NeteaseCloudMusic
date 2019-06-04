/*
 * @Author: Tony
 * @Date: 2019-06-03 15:59:31
 * @Last Modified by: Tony
 * @Last Modified time: 2019-06-03 17:10:15
 */
import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';

export default class SplashPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  componentDidMount() {
    const { navigation, } = this.props;
    this.timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 200);
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

