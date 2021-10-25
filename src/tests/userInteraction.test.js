const { assert } = require('chai');
const { questions, getUserInput } = require('../userInteraction');

describe('userInteraction', () => {
  describe('#questions to get startTime, bedTime, and endTime', () => {
    it('should have three questions', () => {
      assert.lengthOf(questions, 3);
    });
  });

  describe('#getUserInput', () => {
    it('should return resolved selections', async () => {
      const mockInquirer = {
        prompt: () =>
          Promise.resolve({
            test: 'test time',
          }),
      };
      const selected = await getUserInput(mockInquirer);
      assert.equal(Object.keys(selected)[0], 'test');
      assert.equal(Object.values(selected)[0], 'test time');
    });
  });
});
