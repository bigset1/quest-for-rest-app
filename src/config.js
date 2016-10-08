/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const restUrl = 'http://192.168.2.110:8080';

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
