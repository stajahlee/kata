/* eslint-disable no-multi-str */
const inquirer = require('inquirer');
const { getRelevantTimes } = require('./time');

const header = '\n{-_-}___$$___Get My Babysitting Charge___$$___{-_-}\n\n';

const instructions =
  '                  INSTRUCTIONS\n\
---------------------------------------------------\n\
1. Select the start time, bedtime, end time.\n\
2. Round to the closest full hour. For instance:\n  \
∙ if you started at 5:50 PM, select 6 PM\n  \
∙ if bedtime was at 9:15 PM, select 9 PM\n  \
∙ if you ended at 12:40 AM, select 1 AM\n\n';

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

module.exports = { questions, getUserInput, header, instructions };
