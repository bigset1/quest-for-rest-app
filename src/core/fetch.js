import superAgent from 'superagent';
import {restUrl, jwt} from '../config';

const wrapRequest = (promise)=> {
  let token = jwt.get();
  console.log(token);
  if (!!token)
    return promise.set('token', `${token}`).type('json');

  return promise.type('json')
}

export default {
  get: (url)=>wrapRequest(superAgent.get(`${restUrl}${url}`)),
  post: (url, data)=>wrapRequest(superAgent.post(`${restUrl}${url}`).send(data)),
  put: (url, data)=>wrapRequest(superAgent.put(`${restUrl}${url}`).send(data)),
};
