import superAgent from 'superagent/lib/client';
import {restUrl} from '../config';

export default {
  get: (url, ...options)=>superAgent.get(`${restUrl}${url}`, ...options),
  post: (url, ...options)=>superAgent.post(`${restUrl}${url}`, ...options),
  put: (url, ...options)=>superAgent.put(`${restUrl}${url}`, ...options),
};
