const { assert } = require('chai');
const { getBabysittingCharge } = require('../calculations');

describe('calculations', () => {
  describe('#getBabysittingCharge', () => {
    it('should return a number that represents full dollar amount with only default arguments', () => {
      const charge = getBabysittingCharge();
      assert.typeOf(charge, 'number');
    });
  });
});
