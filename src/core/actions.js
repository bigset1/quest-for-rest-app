import constants from './constants';
import {quests, auth} from './api';
import {jwt} from '../config';

export const fetchQuests = ()=> {
  return dispatch=> {
    return quests.all()
      .then(response=> {
        dispatch({
          type: constants.FETCH_QUESTS,
          payload: response.body
        })
      })
      .catch(result=> {
        console.log(result);
        dispatch({
          type: constants.FETCH_QUESTS_ERROR,
          error: result
        })
      })
  }
};

export const login = (type, ...otherProps)=> {
  return dispatch=> {
    switch (type) {
      case 'vk':
        return auth.loginVK(...otherProps).then(({body})=> {
          jwt.set(body.token);

          dispatch({
            type: constants.AUTH_LOGIN_SUCCESS,
            payload: body
          })
        }).catch(result=> {
          console.log(result);
        });
        break;
      default:
        return auth.login(...otherProps).then(({body})=> {
          jwt.set(body.token);

          dispatch({
            type: constants.AUTH_LOGIN_SUCCESS,
            payload: body
          })
        }).catch(result=> {
          console.log(result);
        });
        break;
    }

  }
}

//export const fetchCurrent
