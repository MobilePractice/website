'use strict';

var app = require('../../..');
var request = require('supertest');

var newStore;

describe('Store API:', function() {

  describe('GET /api/drink/stores', function() {
    var stores;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/stores')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          stores = res.body.result;
          done();
        });
    });

    it('should respond with JSON array', function() {
      stores.should.be.instanceOf(Array);
    });

  });

  describe('GET /api/drink/stores/:id', function() {
    var store;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/stores/511/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          store = res.body.result;
          done();
        });
    });

    afterEach(function() {
      store = {};
    });

    it('should respond with the requested store', function() {
      store.id.should.equal(511);
      store.name.should.equal('King & Spadina');
    });

  });

  describe('GET /api/drink/stores/:store_id/products/:product_id/inventory', function() {
    var inventory;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/stores/511/products/288506/inventory')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          inventory = res.body.result;
          done();
        });
    });

    afterEach(function() {
      inventory = {};
    });

    it('should respond with the requested store', function() {
      inventory.store_id.should.equal(511);
      inventory.product_id.should.equal(288506);
    });

  });

});
