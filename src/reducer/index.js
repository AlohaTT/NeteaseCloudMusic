/*
 * @Author: Tony
 * @Date: 2019-06-03 15:59:20
 * @Last Modified by: Tony
 * @Last Modified time: 2019-06-04 13:43:14
 */
import { combineReducers, } from 'redux';
import { navReducer, } from '../navigator/AppNavigators';
import userReducer from './user/index';

export default combineReducers({
  nav:navReducer,
  user:userReducer,
});