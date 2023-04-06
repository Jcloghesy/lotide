// **** TESTING: tail FUNCTION **** 

// **** REFERENCING OTHER FUNCTION(s): tail & chai assert****
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['4', '5'] for ['3', '4', '5']", () => {
    assert.deepEqual(tail(['3', '4', '5']), ['4', '5']);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
