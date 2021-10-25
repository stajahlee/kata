const inquirer = require('inquirer');

const questions = [];

const getUserInput = async () => inquirer.prompt().then((r) => r);

const main = async () => {
  const selectedTimes = await getUserInput();
  return selectedTimes;
};

main();

module.exports = {
  questions,
  main,
};
