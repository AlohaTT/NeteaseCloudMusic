import types from '../../action/type';
const DEFAULT_STATE = {
  userInfo: {},
};

export default function onAction(state = DEFAULT_STATE, action) {
  switch (action.type) {
  case types.USER_UPDATE:
    return { ...state, userInfo: action.userInfo, };

  default:
    return state;
  }

}