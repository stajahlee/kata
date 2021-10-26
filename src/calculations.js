/**
 * given times object, get the integer portion of the time
 * @param {*} times
 * @returns number - the integer portion of the time, eg. 1 AM returns 1, 11 PM returns 11
 */
const enumerateTimes = (times) => {
  const { startTime, bedTime, endTime } = times;
  return {
    startTime: parseInt(startTime.split(' ')[0], 10),
    bedTime: parseInt(bedTime.split(' ')[0], 10),
    endTime: parseInt(endTime.split(' ')[0], 10),
  };
};

/**
 * given two numbers that each represent a stretch of time between 5 PM and 4 AM in one night, find the earliest
 * @param {*} time1
 * @param {*} time2
 * @returns earlier time (where 5 - 11 are PM, 12 is AM, 1 - 4 are AM, so 11 is earlier than 3 in this case even though it is a larger int.)
 */
const earlier = (time1, time2) => {
  if (time2 <= 4 && !(time1 <= 4)) return time1;
  if (time1 <= 4 && !(time2 <= 4)) return time2;
  return Math.min(time1, time2);
};

/**
 * find the charge for a full night of babysitting
 * rates are currently set by the babysitter but in future could be a variable input when program runs
 * @param {*} times
 * @param {*} rates
 * @returns number - the charge for a full night of babysitting work as a whole integer representing USD
 */
const getBabysittingCharge = (
  times = { startTime: '5 PM', bedTime: '8 PM', endTime: '4 AM' },
  rates = { startToBedRate: 12, bedToMidnightRate: 8, midnightToEndRate: 16 }
) => {
  // eslint-disable-next-line prefer-const
  let { startTime, bedTime, endTime } = enumerateTimes(times);
  if (endTime === earlier(endTime, startTime)) return 0;
  if (bedTime === earlier(bedTime, startTime)) bedTime = startTime;
  const { startToBedRate, bedToMidnightRate, midnightToEndRate } = rates;

  const timeFromStartToBed = bedTime < startTime ? 0 : bedTime - startTime;
  const timeFromBedToMidnight = 12 - bedTime;
  const timeFromMidnightToEnd = endTime >= 1 && endTime <= 4 ? endTime : 0;

  return (
    timeFromStartToBed * startToBedRate +
    timeFromBedToMidnight * bedToMidnightRate +
    timeFromMidnightToEnd * midnightToEndRate
  );
};

module.exports = { getBabysittingCharge, earlier };
