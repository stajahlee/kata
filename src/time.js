/**
 * get an array for startTimes, bedTimes, and endTimes
 * @returns object with 3 keys, startTimes, bedTimes, endTimes which give a string array that make sense for that key, eg: startTimes: ['5 PM', '6 PM', ...]
 */
const getRelevantTimes = () => {
  const allPossibleTimes = [];
  for (let i = 5; i <= 12; i += 1) {
    allPossibleTimes.push(`${i} ${i === 12 ? 'AM' : 'PM'}`);
  }
  for (let j = 1; j <= 4; j += 1) {
    allPossibleTimes.push(`${j} AM`);
  }
  const startTimes = allPossibleTimes.slice(0, -1);
  const bedTimes = allPossibleTimes.slice(0, -5).concat(['12 AM or Later']);
  const endTimes = allPossibleTimes.slice(1);
  return { startTimes, bedTimes, endTimes };
};

module.exports = { getRelevantTimes };
