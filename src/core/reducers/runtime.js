import constants from '../constants';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case constants.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
}
