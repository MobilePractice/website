/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/drink/stores              ->  index
 */

'use strict';

import service from '../../../components/services/drink.js';

var endpoint = '/stores/';

// Gets a list of Stores
exports.index = function(req, res) {
  //http://lcboapi.com/stores or
  //http://lcboapi.com/stores/?lat=43.65838&lon=-79.44335&product_id=288506

  service.call(endpoint, req, res);
};

// Gets a single Store
exports.show = function(req, res) {
  //http://lcboapi.com/stores/511
  service.call(endpoint + req.params.id, req, res);
};

// Gets inventory for the specified store and product
exports.inventory = function(req, res) {
  //http://lcboapi.com/stores/511/products/288506/inventory
  endpoint = '/stores/' + req.params.store_id + '/products/' + req.params.product_id + '/inventory';
  service.call(endpoint, req, res);
}
