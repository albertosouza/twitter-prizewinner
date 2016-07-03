var assert = require('assert');
var helpers = require('we-test-tools').helpers;
var stubs = require('we-test-tools').stubs;
var sinon = require('sinon');
var controller, we;

describe('controllers.main', function () {
  before(function (done) {
    controller = require('../../../server/controllers/main.js');
    we = helpers.getWe();
    done();
  });

  describe('controllers.auth.index', function () {
    it('should set res.locals.data', function (done) {
      var res = {
        locals: {},
        goTo: function goTo(location) {
          assert.equal(location, '/tweet');
          done();
        }
      };

      sinon.spy(res, 'goTo');
      controller.index({ we: we }, res);

      assert(res.goTo.called);
    });
  });
});
