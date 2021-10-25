const { assert } = require('chai');
const { main } = require('..');

describe('index', () => {
  it('should run no problem', () => {
    const result = main();
    assert.equal(result, 'no problem');
  });
});
