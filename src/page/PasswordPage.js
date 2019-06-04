import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { List, InputItem, Button, Toast, } from '@ant-design/react-native';
import GlobalStyles from '../res/GlobalStyles';
import { fetchData, } from '../util/FetchUtil';
import UserService from '../api/service/UserService';
import action from '../action/index';

class PasswordPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  constructor(props) {
    super(props);

    this.state = {
      password: '',
    };
  }

  _onPress = () => {
    const { navigation, login, } = this.props;
    const phoneNumber = navigation.getParam('phoneNumber');
    login({
      phone: phoneNumber,
      password: this.state.password,
    }, navigation);
  }

  render() {

    return (
      <View>
        <List>
          <InputItem
            extra="忘记密码"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            onExtraClick={() => {

            }}
            placeholder="请输入密码"
          />
        </List>
        <Button
          onPress={this._onPress}
          style={GlobalStyles.btn}
        >登录</Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  login: (params, navigation) => {
    dispatch(action.login(params, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);
