'use strict';

var app = require('../../..');
var request = require('supertest');

var newInventory;

describe('Inventory API:', function() {

  describe('GET /api/drink/inventories', function() {
    var inventorys;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/inventories')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          inventorys = res.body.result;
          done();
        });
    });

    it('should respond with JSON array', function() {
      inventorys.should.be.instanceOf(Array);
    });

  });

});
