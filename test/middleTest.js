// **** TESTING: middle FUNCTION ****

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns '6, 7' for [5, 6, 7, 8]", () => {
    assert.deepEqual(middle([5, 6, 7, 8]), [6, 7]); 
  });
});