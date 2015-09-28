/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/drink/datasets              ->  index
 */

'use strict';

import service from '../../../components/services/drink.js';

var endpoint = '/datasets/';

// Gets a list of Stores
exports.index = function(req, res) {
  //http://lcboapi.com/datasets or
  //http://lcboapi.com/datasets/?order=created_at.asc

  service.call(endpoint, req, res);
};

// Gets a single Store
exports.show = function(req, res) {
  //http://lcboapi.com/datasets/1616
  service.call(endpoint + req.params.id, req, res);
};
