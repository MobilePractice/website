'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var productCtrlStub = {
  index: 'productCtrl.index',
  show: 'productCtrl.show'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var productIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './product.controller': productCtrlStub
});

describe('Product API Router:', function() {

  it('should return an express router instance', function() {
    productIndex.should.equal(routerStub);
  });

  describe('GET /api/drink/products', function() {

    it('should route to product.controller.index', function() {
      routerStub.get
        .withArgs('/', 'productCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/drink/products/:id', function() {

    it('should route to product.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'productCtrl.show')
        .should.have.been.calledOnce;
    });

  });

});
