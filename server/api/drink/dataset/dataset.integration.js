'use strict';

var app = require('../../..');
var request = require('supertest');

var newDataset;

describe('Dataset API:', function() {

  describe('GET /api/drink/datasets', function() {
    var datasets;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/datasets')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          datasets = res.body.result;
          done();
        });
    });

    it('should respond with JSON array', function() {
      datasets.should.be.instanceOf(Array);
    });

  });

  describe('GET /api/drink/datasets/:id', function() {
    var dataset;

    beforeEach(function(done) {
      request(app)
        .get('/api/drink/datasets/1616')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          dataset = res.body.result;
          done();
        });
    });

    afterEach(function() {
      dataset = {};
    });

    it('should respond with the requested dataset', function() {
      dataset.id.should.equal(1616);
      dataset.csv_dump.should.equal('http://static.lcboapi.com/datasets/1616.zip');
    });

  });

});
