import React, { Component, } from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { ColorFlags, } from '../res/ThemeFactory';
import { Button, Checkbox, Toast, } from '@ant-design/react-native';

class LoginPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  constructor(props) {
    super(props);

    this.state = {
      agree: true,
    };
  }

  _onPress = () => {
    const { navigation, } = this.props;
    if (this.state.agree) {
      navigation.navigate('PhoneLogin');
    } else {
      Toast.info('请先勾选同意');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={ColorFlags.Red} />
        <View flex={1}></View>
        <Button onPress={this._onPress}
          style={styles.loginButton}
        >手机号登录</Button>
        <Checkbox
          checked={this.state.agree}
          onChange={(agree) => {
            this.setState({
              agree: agree.target.checked,
            });
          }
          }
        >同意</Checkbox>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorFlags.Red,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  loginButton: {
    borderRadius: 5,
  },
  protocal: {

  },

});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
