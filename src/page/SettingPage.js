import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { ImagePicker, } from '@ant-design/react-native';

class SettingPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    const {userInfo,} = this.props;
    return (
      <View>
        <ImagePicker/>
        <View>
          <Text>{userInfo.profile.nickname}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo:state.user.userInfo,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);
