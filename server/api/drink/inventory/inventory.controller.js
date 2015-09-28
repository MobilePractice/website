/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/drink/inventories              ->  index
 */

'use strict';

import service from '../../../components/services/drink.js';

var endpoint = '/inventories/';

// Gets a list of Stores
exports.index = function(req, res) {
  //http://lcboapi.com/inventories

  service.call(endpoint, req, res);
};
