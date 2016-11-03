import superAgent from 'superagent';
import {restUrl, jwt} from '../config';

const wrapRequest = (promise, options)=> {
  let token = jwt.get();
  console.log(token);
  if (!!token && !options.auth)
    return promise.set('token', `${token}`).type('json');

  return promise.type('json')
}

export default {
  get: (url, options = {})=>wrapRequest(superAgent.get(`${restUrl}${url}`), options),
  post: (url, options = {})=>wrapRequest(superAgent.post(`${restUrl}${url}`), options),
  put: (url, options = {})=>wrapRequest(superAgent.put(`${restUrl}${url}`), options),
};
