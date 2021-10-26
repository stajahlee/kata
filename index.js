const { getUserInput } = require('./src/userInteraction');
const { getBabysittingCharge } = require('./src/calculations');

const getSelectedTimes = async () => getUserInput();

/**
 * @returns babysitting charge for the night depending on start time, bed time, end time and
 * num hours in specific hour sets
 */
const main = async () => {
  const selectedTimes = await getSelectedTimes();
  const nightlyCharge = getBabysittingCharge(selectedTimes);
  return nightlyCharge;
};

main();
