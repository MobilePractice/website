'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var drinkCtrlStub = {
  index: 'drinkCtrl.index',
  show: 'drinkCtrl.show',
  create: 'drinkCtrl.create',
  update: 'drinkCtrl.update',
  destroy: 'drinkCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var drinkIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './drink.controller': drinkCtrlStub
});

describe('Drink API Router:', function() {

  it('should return an express router instance', function() {
    drinkIndex.should.equal(routerStub);
  });

  describe('GET /api/drinks', function() {

    it('should route to drink.controller.index', function() {
      routerStub.get
        .withArgs('/', 'drinkCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/drinks/:id', function() {

    it('should route to drink.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'drinkCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/drinks', function() {

    it('should route to drink.controller.create', function() {
      routerStub.post
        .withArgs('/', 'drinkCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/drinks/:id', function() {

    it('should route to drink.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'drinkCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/drinks/:id', function() {

    it('should route to drink.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'drinkCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/drinks/:id', function() {

    it('should route to drink.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'drinkCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
