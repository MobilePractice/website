'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var inventoryCtrlStub = {
  index: 'inventoryCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var inventoryIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './inventory.controller': inventoryCtrlStub
});

describe('Inventory API Router:', function() {

  it('should return an express router instance', function() {
    inventoryIndex.should.equal(routerStub);
  });

  describe('GET /api/drink/inventories', function() {

    it('should route to inventory.controller.index', function() {
      routerStub.get
        .withArgs('/', 'inventoryCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
