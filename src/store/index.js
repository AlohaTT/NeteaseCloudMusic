/*
 * @Author: Tony
 * @Date: 2019-06-03 15:59:24
 * @Last Modified by:   Tony
 * @Last Modified time: 2019-06-03 15:59:24
 */
import { createStore, applyMiddleware, } from 'redux';
import { middleware, } from '../navigator/AppNavigators';
import appReducer from '../reducer/index';
import thunk from 'redux-thunk';

const middlewares=[
  thunk,
  middleware,
];

export default createStore(
  appReducer,
  applyMiddleware(...middlewares)
);