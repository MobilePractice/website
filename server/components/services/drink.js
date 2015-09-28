'use strict';

var _ = require('lodash');
var unirest = require('unirest');
var LCBO_API_URL = process.env.LCBO_API_SECURE_DOMAIN;
var ACCESS_KEY = process.env.LCBO_API_ACCESS_KEY;

/**
 * Executes the call to http://lcboapi.com
 * @param  {string} endpoint the endpoint we are calling (stores|products|inventories|datasets)
 * @param  {object} req      request object
 * @param  {object} res      response object
 */
exports.call = function(endpoint, req, res) {
  var url = LCBO_API_URL + endpoint;
  var querystring = req.query;
  var request = unirest.get(url);

  request.query({ 'access_key': ACCESS_KEY });

  _.forEach(querystring, function(val, key) {
    var q = {};
    q[key] = val;
    request.query(q);
  });

  request.end(function(response) {
    res.status(response.status).json(response.body);
  });
};
