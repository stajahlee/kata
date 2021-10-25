const { assert } = require('chai');
const { getBabysittingCharge } = require('../calculations');

describe('calculations', () => {
  describe('#getBabysittingCharge', () => {
    it('should return a number that represents full dollar amount with only default arguments', () => {
      const charge = getBabysittingCharge();
      assert.typeOf(charge, 'number');
    });

    it('should return a number that represents full dollar amount with times argument', () => {
      const times = { startTime: '5 PM', bedTime: '8 PM', endTime: '4 AM' };
      const charge = getBabysittingCharge(times);
      assert.typeOf(charge, 'number');
    });

    it('should return 132 dollars when start time is 5 PM bed time is 8 PM and end time is 4 AM', () => {
      const times = { startTime: '5 PM', bedTime: '8 PM', endTime: '4 AM' };
      // ((8 - 5) * 12) + ((12 - 8) * 8) + (4 * 16) = 132
      assert.equal(getBabysittingCharge(times), 132);
    });

    describe('various start times', () => {
      it('should return 120 dollars when start time is 6 PM bed time is 8 PM and end time is 4 AM', () => {
        const times = { startTime: '6 PM', bedTime: '8 PM', endTime: '4 AM' };
        // ((8 - 6) * 12) + ((12 - 8) * 8) + (4 * 16) = 120
        assert.equal(getBabysittingCharge(times), 120);
      });

      it('should return 108 dollars when start time is 7 PM bed time is 8 PM and end time is 4 AM', () => {
        const times = { startTime: '7 PM', bedTime: '8 PM', endTime: '4 AM' };
        // ((8 - 7) * 12) + ((12 - 8) * 8) + (4 * 16) = 108
        assert.equal(getBabysittingCharge(times), 108);
      });

      it('should return 96 dollars when start time is 8 PM bed time is 8 PM and end time is 4 AM', () => {
        const times = { startTime: '8 PM', bedTime: '8 PM', endTime: '4 AM' };
        // ((12 - 8) * 8) + (4 * 16) = 96
        assert.equal(getBabysittingCharge(times), 96);
      });
    });

    describe('various end times', () => {
      it('should return 116 dollars when start time is 5 PM bed time is 8 PM and end time is 3 AM', () => {
        const times = { startTime: '5 PM', bedTime: '8 PM', endTime: '3 AM' };
        // ((8 - 5) * 12) + ((12 - 8) * 8) + (3 * 16) = 116
        assert.equal(getBabysittingCharge(times), 116);
      });

      it('should return 100 dollars when start time is 5 PM bed time is 8 PM and end time is 2 AM', () => {
        const times = { startTime: '5 PM', bedTime: '8 PM', endTime: '2 AM' };
        // ((8 - 5) * 12) + ((12 - 8) * 8) + (2 * 16) = 100
        assert.equal(getBabysittingCharge(times), 100);
      });

      it('should return 84 dollars when start time is 5 PM bed time is 8 PM and end time is 1 AM', () => {
        const times = { startTime: '5 PM', bedTime: '8 PM', endTime: '1 AM' };
        // ((8 - 5) * 12) + ((12 - 8) * 8) + (1 * 16) = 84
        assert.equal(getBabysittingCharge(times), 84);
      });

      it('should return 68 dollars when start time is 5 PM bed time is 8 PM and end time is 12 AM', () => {
        const times = { startTime: '5 PM', bedTime: '8 PM', endTime: '12 AM' };
        // ((8 - 5) * 12) + ((12 - 8) * 8) = 68
        assert.equal(getBabysittingCharge(times), 68);
      });
    });

    describe('various bed times', () => {
      it('should return 120 dollars when start time is 5 PM bed time is 5 PM and end time is 4 AM', () => {
        const times = { startTime: '5 PM', bedTime: '5 PM', endTime: '4 AM' };
        // ((12 - 5) * 8) + (4 * 16) = 120
        assert.equal(getBabysittingCharge(times), 120);
      });

      it('should return 124 dollars when start time is 5 PM bed time is 6 PM and end time is 4 AM', () => {
        const times = { startTime: '5 PM', bedTime: '6 PM', endTime: '4 AM' };
        // ((6 - 5) * 12) + ((12 - 6) * 8) + (4 * 16) = 124
        assert.equal(getBabysittingCharge(times), 124);
      });

      it('should return 128 dollars when start time is 5 PM bed time is 7 PM and end time is 4 AM', () => {
        const times = { startTime: '5 PM', bedTime: '7 PM', endTime: '4 AM' };
        // ((7 - 5) * 12) + ((12 - 7) * 8) + (4 * 16) = 128
        assert.equal(getBabysittingCharge(times), 128);
      });

      it('should return 136 dollars when start time is 5 PM bed time is 9 PM and end time is 4 AM', () => {
        const times = { startTime: '5 PM', bedTime: '9 PM', endTime: '4 AM' };
        // ((9 - 5) * 12) + ((12 - 9) * 8) + (4 * 16) = 136
        assert.equal(getBabysittingCharge(times), 136);
      });

      it('should return 140 dollars when start time is 5 PM bed time is 10 PM and end time is 4 AM', () => {
        const times = { startTime: '5 PM', bedTime: '10 PM', endTime: '4 AM' };
        // ((10 - 5) * 12) + ((12 - 10) * 8) + (4 * 16) = 140
        assert.equal(getBabysittingCharge(times), 140);
      });

      it('should return 144 dollars when start time is 5 PM bed time is 11 PM and end time is 4 AM', () => {
        const times = { startTime: '5 PM', bedTime: '11 PM', endTime: '4 AM' };
        // ((11 - 5) * 12) + ((12 - 11) * 8) + (4 * 16) = 144
        assert.equal(getBabysittingCharge(times), 144);
      });

      it('should return 148 dollars when start time is 5 PM bed time is 12 AM or Later and end time is 4 AM', () => {
        const times = {
          startTime: '5 PM',
          bedTime: '12 AM or Later',
          endTime: '4 AM',
        };
        // ((12 - 5) * 12) + (4 * 16) = 148
        assert.equal(getBabysittingCharge(times), 148);
      });
    });

    describe('various start, bed, and end times', () => {
      it('should return 84 dollars when start time is 7 PM bed time is 10 PM and end time is 2 AM', () => {
        const times = { startTime: '7 PM', bedTime: '10 PM', endTime: '2 AM' };
        // ((10 - 7) * 12) + ((12 - 10) * 8) + (2 * 16) = 84
        assert.equal(getBabysittingCharge(times), 84);
      });

      it('should return 88 dollars when start time is 9 PM bed time is 6 PM and end time is 12 AM', () => {
        const times = { startTime: '9 PM', bedTime: '6 PM', endTime: '12 AM' };
        // ((12 - 9) * 8) + (4 * 16) = 88
        assert.equal(getBabysittingCharge(times), 88);
      });

      it('should return 0 dollars when start time is 5 PM bed time is 7 PM and end time is 4 AM', () => {
        const times = {
          startTime: '9 PM',
          bedTime: '9 PM',
          endTime: '9 PM',
        };
        assert.equal(getBabysittingCharge(times), 0);
      });
    });
  });
});
