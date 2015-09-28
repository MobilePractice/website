'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var storeCtrlStub = {
  index: 'storeCtrl.index',
  show: 'storeCtrl.show'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var storeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './store.controller': storeCtrlStub
});

describe('Store API Router:', function() {

  it('should return an express router instance', function() {
    storeIndex.should.equal(routerStub);
  });

  describe('GET /api/drink/stores', function() {

    it('should route to store.controller.index', function() {
      routerStub.get
        .withArgs('/', 'storeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/drink/stores/:id', function() {

    it('should route to store.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'storeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

});
