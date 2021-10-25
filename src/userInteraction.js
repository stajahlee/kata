const inquirer = require('inquirer');

const { getRelevantTimes } = require('./time');

const { startTimes, bedTimes, endTimes } = getRelevantTimes();

const questions = [
  {
    type: 'list',
    name: 'startTime',
    message: 'Start time:',
    choices: startTimes,
  },
  {
    type: 'list',
    name: 'bedTime',
    message: 'Bed time:',
    choices: bedTimes,
  },
  {
    type: 'list',
    name: 'endTime',
    message: 'End time:',
    choices: endTimes,
  },
];

const getUserInput = async (_inquirer = inquirer) =>
  _inquirer.prompt(questions).then((r) => r);

module.exports = { questions, getUserInput };
