import constants from '../constants';

export default function quests(state = {}, action) {
  switch (action.type) {
    case constants.FETCH_QUESTS:
      return {
        ...state,
        quests: action.payload
      };
    //case constants.
    default:
      return state;
  }
}
