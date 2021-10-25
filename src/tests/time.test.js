const { assert } = require('chai');
const { getRelevantTimes } = require('../time');

describe('time utils', () => {
  describe('#getRelevantTimes', () => {
    it('should return an object with three keys', () => {
      const times = getRelevantTimes();
      assert.lengthOf(Object.keys(times), 3);
    });

    it('should return an object whose values are all arrays', () => {
      const times = getRelevantTimes();
      Object.values(times).forEach((each) => assert.typeOf(each, 'array'));
    });

    const { startTimes, bedTimes, endTimes } = getRelevantTimes();
    describe('#start times', () => {
      it('should include 5 PM through 11 PM', () => {
        for (let i = 5; i < 12; i += 1) {
          assert.include(startTimes, `${i} PM`);
        }
      });

      it('should include 12 AM', () => {
        assert.include(startTimes, `12 AM`);
      });

      it('should include 1 AM through 3 AM', () => {
        // it does not make sense to start after 3 AM if babysitter leaves by 4 AM
        for (let i = 1; i < 4; i += 1) {
          assert.include(startTimes, `${i} AM`);
        }
      });

      it('should not include 4 AM', () => {
        // it does not make sense to start at 4 AM if babysitter leaves by 4 AM
        assert.notInclude(startTimes, `4 AM`);
      });
    });

    describe('#bed times', () => {
      it('should include 5 PM through 11 PM', () => {
        for (let i = 5; i < 12; i += 1) {
          assert.include(bedTimes, `${i} PM`);
        }
      });

      it('should not include any times 12 AM or later', () => {
        assert.notInclude(bedTimes, `12 AM`);
        for (let i = 1; i <= 4; i += 1) {
          assert.notInclude(bedTimes, `${i} AM`);
        }
      });
    });

    describe('#end times', () => {
      it('should not include 5 PM', () => {
        // it does not make sense to end at 5 PM if babysitter starts at 5 PM or later
        assert.notInclude(endTimes, `5 PM`);
      });

      it('should include 6 PM through 11 PM', () => {
        for (let i = 6; i < 12; i += 1) {
          assert.include(endTimes, `${i} PM`);
        }
      });

      it('should include 12 AM', () => {
        assert.include(endTimes, `12 AM`);
      });

      it('should include 1 AM through 4 AM', () => {
        for (let i = 1; i <= 4; i += 1) {
          assert.include(endTimes, `${i} AM`);
        }
      });
    });
  });
});
