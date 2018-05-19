"use strict";

var sinon = require('sinon'),
  chai = require('chai'),
  expect = chai.expect,
  should = chai.should();
chai.use(require('sinon-chai'));


var linAlg = require('../index');


var mocker = null;

var test = module.exports = {
  beforeEach: function() {
    mocker = sinon.sandbox.create();
  },
  afterEach: function() {
    mocker.restore();
  }
};


test['node interface'] = {
  'references': function() {
    linAlg.normal.should.be.instanceof(Function);
    linAlg.precision.should.be.instanceof(Function);
  },
  'init': {
    'normal': function() {
      mocker.spy(linAlg, 'normal');

      var LinAlg = linAlg();
      LinAlg.Matrix.should.be.instanceof(Function);
    },
    'precision': function() {
      mocker.spy(linAlg, 'precision');

      var LinAlg = linAlg({
        add: true
      });
      LinAlg.Matrix.should.be.instanceof(Function);
    },    
  }
};


