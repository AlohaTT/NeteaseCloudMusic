/**
 * 主题
 * @flow
 */


import {
  StyleSheet,
} from 'react-native';

export const ColorFlags = {
  Default: '#4caf50',
  Red: '#F44336',
  Pink: '#E91E63',
  Purple: '#9C27B0',
  DeepPurple: '#673AB7',
  Indigo: '#3F51B5',
  Blue: '#2196F3',
  LightBlue: '#03A9F4',
  Cyan: '#00BCD4',
  Teal: '#009688',
  Green: '#00C0AC',
  LightGreen: '#8BC34A',
  Lime: '#CDDC39',
  Yellow: '#FFEB3B',
  Amber: '#FFC107',
  Orange: '#FF9800',
  DeepOrange: '#FF5722',
  Brown: '#795548',
  Grey: '#9E9E9E',
  BlueGrey: '#607D8B',
  Black: '#000000',
  White: '#FFFFFF',
  Background:'#F3F7F9',
};

export const DimenFlags ={
  MainSize: 12,
  HorizontalMargin:8,
};

export default class ThemeFactory {
  // constructor(themeFlag) {
  //     this.themeFlag = themeFlag;
  //     this.theme = this.createTheme();
  // }

  static createTheme(themeFlag) {
    return {
      themeColor: themeFlag,
      styles: StyleSheet.create({
        selectedTitleStyle: {
          color: themeFlag,
        },
        tabBarSelectedIcon: {
          tintColor: themeFlag,
        },
        navBar: {
          backgroundColor: themeFlag,
        },
        themeColor: {
          color: themeFlag,
        },

      }),
    };
  }
}

