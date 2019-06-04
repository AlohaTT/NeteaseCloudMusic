import React, { Component, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { List, InputItem, Button, } from '@ant-design/react-native';
import DeviceInfo from 'react-native-device-info';
import { ColorFlags, } from '../res/ThemeFactory';
import RouterHub from '../RouterHub';

class PhoneLoginPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
    };
  }

  componentDidMount() {
    this.setState({
      phoneNumber: DeviceInfo.getPhoneNumber(),
    });
  }

  render() {
    return (
      <View>
        <List>
          <InputItem
            clear
            onChange={(text) => {
              this.setState({
                phoneNumber: text,
              });
            }}
            placeholder="请输入手机号"
          >
            +86
          </InputItem>
        </List>
        <Button onPress={() => {
          this.props.navigation.navigate(RouterHub.PASSWORD, {
            phoneNumber: this.state.phoneNumber,
          });
        }
        }
        style={styles.btn}
        >下一步</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: ColorFlags.Red,
    borderRadius: 5,
  },
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneLoginPage);
