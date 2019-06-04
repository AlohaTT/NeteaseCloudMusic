import { fetchData, } from '../../util/FetchUtil';
import UserService from '../../api/service/UserService';
import type from '../type';
import RouterHub from '../../RouterHub';

export function login(params, navigation) {
  return (dispatch) => {
    fetchData(UserService.LOGIN, params)
      .then((res) => {
        dispatch({ type: type.USER_UPDATE, userInfo: res, });
        navigation.navigate(RouterHub.HOME);
      });
  };

}