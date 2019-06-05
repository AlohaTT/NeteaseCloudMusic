import React, { Component, } from 'react';
import { View, Text, StatusBar, ToastAndroid, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { ColorFlags, } from '../res/ThemeFactory';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerActions, createMaterialTopTabNavigator, createAppContainer, MaterialTopTabBar, } from 'react-navigation';
import { WingBlank, } from '@ant-design/react-native';
import MinePage from './MinePage';
import FindPage from './FindPage';
import FriendsPage from './FriendsPage';
import VideoPage from './VideoPage';
import RouterHub from '../RouterHub';

class HomePage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  _genTabs = (navigation) => {
    return createMaterialTopTabNavigator({
      Mine: {
        screen: MinePage,
        navigationOptions: {
          title: '我的',
        },
      },
      Find: {
        screen: FindPage,
        navigationOptions: {
          title: '发现',
        },
      },
      Friends: {
        screen: FriendsPage,
        navigationOptions: {
          title: '朋友',
        },
      },
      Video: {
        screen: VideoPage,
        navigationOptions: {
          title: '视频',
        },
      },
    }, {
      tabBarComponent: props => {
        return <CustomTab {...props}
          homeNav={navigation}
               />;
      },
      tabBarOptions: {
        labelStyle: {
          color: ColorFlags.Black,
        },
        style: {
          backgroundColor: ColorFlags.White,
        },
        indicatorStyle: {
          backgroundColor: ColorFlags.Transparent,
        },
      },
    });
  }

  render() {
    const { navigation, } = this.props;
    const TopContainer = createAppContainer(this._genTabs(navigation));
    return (
      <TopContainer />
    );
  }
}

class CustomTab extends Component {
  render() {
    const { homeNav, } = this.props;
    return (
      <View>
        <StatusBar backgroundColor={ColorFlags.White}
          barStyle="dark-content"
        />
        <WingBlank style={{ flexDirection: 'row', alignItems: 'center', }}>
          <AntDesign name="bars"
            onPress={() => {
              homeNav.dispatch(DrawerActions.toggleDrawer());
            }}
            size={26}
          />
          <MaterialTopTabBar {...this.props}
            style={{ flex: 1, backgroundColor: ColorFlags.Transparent, }}
          />
          <AntDesign name="search1"
            onPress={() => {
              homeNav.navigate(RouterHub.SEARCH);
            }}
            size={26}
          />
        </WingBlank>
      </View>

    );
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
