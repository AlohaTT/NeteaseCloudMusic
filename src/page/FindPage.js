import React, { Component, } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { Carousel, WingBlank, WhiteSpace, } from '@ant-design/react-native';
import { fetchData, } from '../util/FetchUtil';
import CommonService from '../api/service/CommonService';
import { ColorFlags, } from '../res/ThemeFactory';

class FindPage extends Component {
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
        <WhiteSpace />
        <WingBlank>
          <Carousel
            autoplay
            infinite
            selectedIndex={2}
            style={styles.wrapper}
          >
            {
              banners.map((banner) => (
                <Image
                  source={{ uri: banner.pic, }}
                  style={{ height: 140, borderRadius: 5, }}
                />
              ))
            }
          </Carousel>
          <View>

          </View>
        </WingBlank>

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

export default connect(mapStateToProps, mapDispatchToProps)(FindPage);
