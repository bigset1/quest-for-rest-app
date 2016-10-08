import React from 'react';

import MapLocationTask from './MapLocationTask';
import TextTask from './TextTask';
import QRTask from './QRTask';

const components = {
  location: MapLocationTask,
  text: TextTask,
  qr: QRTask
};

export const types = {
  location: 'location',
  text: 'text',
  qr: 'qr'
};
const _titles = {
  location: 'Location required',
  text: 'Simple',
  qr: 'QR code'
};

export const getTitle = (type)=>(_titles[type])

export default (type)=>(components[type])
