import constants from './constants';
import {quests, auth} from './api';

export const fetchQuests = ()=> {
  return dispatch=> {
    quests.all()
      .then(response=> {
        dispatch({
          type: constants.FETCH_QUESTS,
          payload: response
        })
      })
      .catch(result=> {
        dispatch({
          type: constants.FETCH_QUESTS_ERROR,
          error: result
        })
      })
  }
};

export const login = (login, password)=> {
  return dispatch=> {
    auth.login(login, password).then(response=> {
      dispatch({
        type: constants.AUTH_LOGIN_SUCCESS,
        payload: response
      })
    })
  }
}

//export const fetchCurrent
