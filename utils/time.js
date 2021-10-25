/**
 * get an array for startTimes, bedTimes, and endTimes
 * @returns object with 3 keys, startTimes, bedTimes, endTimes which give a string array that make sense for that key, eg: startTimes: ['5 PM', '6 PM', ...]
 */
const getRelevantTimes = () => {
  const startTimes = [];
  const bedTimes = [];
  const endTimes = [];
  return { startTimes, bedTimes, endTimes };
};

module.exports = { getRelevantTimes };
