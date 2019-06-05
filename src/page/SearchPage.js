import React, { Component, } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { Carousel, } from '@ant-design/react-native';
import { ColorFlags, } from '../res/ThemeFactory';
import { fetchData, } from '../util/FetchUtil';
import CommonService from '../api/service/CommonService';

class SearchPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  constructor(props) {
    super(props);

    this.state = {
      banners: [],
    };
  }

  componentDidMount() {
    fetchData(CommonService.BANNER, {
      type: 2,
    }).then((res) => {
      this.setState({
        banners: res.banners,
      });
    });
  }

  render() {
    const { banners, } = this.state;
    return (
      <View>
        <Carousel
          autoplay
          infinite
          selectedIndex={2}
          style={styles.wrapper}
        >
          {
            banners.map((banner) => (
              <Image source={{ uri: banner.pic, }}
                 style={{ height: 150, }}
               />
            ))
          }
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
