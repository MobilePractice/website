/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/drink/products              ->  index
 */

'use strict';

import service from '../../../components/services/drink.js';

var endpoint = '/products/';

// Gets a list of Products
exports.index = function(req, res) {
  //http://lcboapi.com/products or
  //http://lcboapi.com/products/?store_id=511
  service.call(endpoint, req, res);
};

// Gets a single Product
exports.show = function(req, res) {
  //http://lcboapi.com/products/288506
  service.call(endpoint + req.params.id, req, res);
};
