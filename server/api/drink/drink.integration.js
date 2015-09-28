'use strict';

var app = require('../..');
var request = require('supertest');

var newDrink;

describe('Drink API:', function() {

  describe('GET /api/drinks', function() {
    var drinks;

    beforeEach(function(done) {
      request(app)
        .get('/api/drinks')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          drinks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      drinks.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/drinks', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/drinks')
        .send({
          name: 'New Drink',
          info: 'This is the brand new drink!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newDrink = res.body;
          done();
        });
    });

    it('should respond with the newly created drink', function() {
      newDrink.name.should.equal('New Drink');
      newDrink.info.should.equal('This is the brand new drink!!!');
    });

  });

  describe('GET /api/drinks/:id', function() {
    var drink;

    beforeEach(function(done) {
      request(app)
        .get('/api/drinks/' + newDrink._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          drink = res.body;
          done();
        });
    });

    afterEach(function() {
      drink = {};
    });

    it('should respond with the requested drink', function() {
      drink.name.should.equal('New Drink');
      drink.info.should.equal('This is the brand new drink!!!');
    });

  });

  describe('PUT /api/drinks/:id', function() {
    var updatedDrink

    beforeEach(function(done) {
      request(app)
        .put('/api/drinks/' + newDrink._id)
        .send({
          name: 'Updated Drink',
          info: 'This is the updated drink!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDrink = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDrink = {};
    });

    it('should respond with the updated drink', function() {
      updatedDrink.name.should.equal('Updated Drink');
      updatedDrink.info.should.equal('This is the updated drink!!!');
    });

  });

  describe('DELETE /api/drinks/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/drinks/' + newDrink._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when drink does not exist', function(done) {
      request(app)
        .delete('/api/drinks/' + newDrink._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
