/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';

export default ()=> {
  return (
    <html className="no-js" lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

      <title>Quest for rest</title>
      <meta name="description" content="quest for rest"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      <link rel="stylesheet" href="/styles.css"/>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.0.1/dist/leaflet.js"></script>
    </head>
    <body>
    <div id="app"/>
    <script src="/app.js"/>
    </body>
    </html>
  );
};

