/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/drink/inventories', require('./api/drink/inventory'));
  app.use('/api/drink/datasets', require('./api/drink/dataset'));
  app.use('/api/drink/products', require('./api/drink/product'));
  app.use('/api/drink/stores', require('./api/drink/store'));
  app.use('/api/drinks', require('./api/drink'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
