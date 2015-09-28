'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var datasetCtrlStub = {
  index: 'datasetCtrl.index',
  show: 'datasetCtrl.show'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var datasetIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './dataset.controller': datasetCtrlStub
});

describe('Dataset API Router:', function() {

  it('should return an express router instance', function() {
    datasetIndex.should.equal(routerStub);
  });

  describe('GET /api/drink/datasets', function() {

    it('should route to dataset.controller.index', function() {
      routerStub.get
        .withArgs('/', 'datasetCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/drink/datasets/:id', function() {

    it('should route to dataset.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'datasetCtrl.show')
        .should.have.been.calledOnce;
    });

  });

});
