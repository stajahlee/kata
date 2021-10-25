const { assert } = require('chai');
const { main, questions } = require('..');

describe('index', () => {
  describe('#main', () => {
    it('should return a number for the babysitting rate for 1 night of work', () => {
      // 1 night rate represents dollars for full hours of work
      // does not use fractional hour so no cents will need to be accounted for
      const result = main();
      assert.typeOf(result, 'number');
    });
  });

  describe('#questions to get startTime, bedTime, and endTime', () => {
    it('should have three questions', () => {
      assert.lengthOf(questions, 3);
    });
  });
});
