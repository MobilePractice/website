'use strict';

var app = require('../../..');
var request = require('supertest');

var newProduct;

describe('Product API:', function() {

  describe('GET /api/drink/products', function() {
    var products;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/products')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          products = res.body.result;
          done();
        });
    });

    it('should respond with JSON array', function() {
      products.should.be.instanceOf(Array);
    });

  });

  describe('GET /api/drink/products/:id', function() {
    var product;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/products/288506')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          product = res.body.result;
          done();
        });
    });

    afterEach(function() {
      product = {};
    });

    it('should respond with the requested product', function() {
      product.id.should.equal(288506);
      product.name.should.equal('Amsterdam Boneshaker');
    });

  });

});
