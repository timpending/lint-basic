const helpers = require('../src/main');
const assert = require('assert');

describe('add()', () => {
  it('should return the sum of two numbers', (done) => {
    assert.equal(helpers.add(2, 4), 6);
    done();
    // done is a callback.  Cannot be used with a promise.  Otherwise use then and catches.
    // done terminates the test once its called
  });
});
