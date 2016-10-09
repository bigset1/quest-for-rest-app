import constants from '../constants';

export default function quests(state = [], action) {
  switch (action.type) {
    case constants.FETCH_QUESTS:
      return action.payload.quests;
    //case constants.
    default:
      return state;
  }
}
