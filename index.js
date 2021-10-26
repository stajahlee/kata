const { header, instructions, getUserInput } = require('./src/userInteraction');
const { getBabysittingCharge } = require('./src/calculations');

const getSelectedTimes = async () => getUserInput();

/**
 * @returns babysitting charge for the night depending on start time, bed time, end time and
 * num hours in specific hour sets
 */
const main = async () => {
  process.stdout.write(header);
  process.stdout.write(instructions);

  const selectedTimes = await getSelectedTimes();
  const nightlyCharge = getBabysittingCharge(selectedTimes);

  process.stdout.write(
    `\nThis night's babysitting charge should be:\n\n$${nightlyCharge}.00\n\n`
  );
  return nightlyCharge;
};

main();
