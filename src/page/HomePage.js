import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

class HomePage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <View>
        <Text> HomePage </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
