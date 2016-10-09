/* eslint-disable max-len */
let _jwt;
const JWT_VARIABLE_NAME = 'jwt_variable';
export const jwt = {
  get: ()=>_jwt,
  set: (j)=> {
    localStorage.setItem(JWT_VARIABLE_NAME, j);
    _jwt = j
  },
  checkStorage: ()=> {
    let j = localStorage.getItem(JWT_VARIABLE_NAME);
    if (!!j) jwt.set(j);
  }
}

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const restUrl = 'http://192.168.43.166:8080';
const VK_API_VERSION = '5.57',
  VK_CLIENT_ID = '5660286';

export const vkAuth = (redirect_url, display = 'popup', scope = 'email', response_type = 'token')=> {
  return `https://oauth.vk.com/authorize?client_id=${VK_CLIENT_ID}&display=${display}&redirect_uri=${redirect_url}&scope=${scope}&response_type=${response_type}&v=${VK_API_VERSION}`
};

export const auth = {

  jwt: {secret: 'React Starter Kit'},

  // https://developers.facebook.com/
  facebook: {
    id: '186244551745631',
    secret: 'a970ae3240ab4b9b8aae0f9f0661c6fc',
  },

  // https://cloud.google.com/console/project
  google: {
    id: '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
  },

  // https://apps.twitter.com/
  twitter: {
    key: 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
  },

};
