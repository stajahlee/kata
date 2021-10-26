Babysitter Kata
---------------

### Instructions
- Open a terminal on your machine
- Ensure you have Node and NPM installed on your system
  - This can be done via terminal: `node -v` and `npm -v`
  - If the terminal prints a version, you can proceed, and if you encounter an error, you will need to install these packages for your operating system
      - For Mac users [see this resource](https://treehouse.github.io/installation-guides/mac/node-mac.html)
      - For Linux user [see this resource](https://treehouse.github.io/installation-guides/linux/node-linux.html)
      - For Windows users [see this resource](https://treehouse.github.io/installation-guides/windows/node-windows.html)
- Ensure that within terminal you are in this directory (where this README exists at /kata)
- Install the required packages for this program using `npm i`
- To run the tests for this program use this command `npm test`
  - `npm run test:watch` is handy during development as changes are watched on each save of the tests or related code
- To run the program and get the babysitter's nightly charge, use `npm run get-charge` (`npm run --silent get-charge` will turn off the extra npm messaging)
- Because the kata has specific rules about full hours for calculating the rate, the input for start time, bed time, and end time are gathered from the user via an interactive command line tool rather than allowing free text input
  - choose these time values using the up and down arrow keys and enter to select the time
- After selecting the three times, the program will output to the terminal the result of the calculations, what should be the babysitter's nightly charge

#### Troubleshooting
- It is possible that one of the installed packages could conflict with your local node version, in which case updating node might help
- Please reach out to Stajah (stajahleehoeflich@gmail.com) for any other unresolvable errors

### Completion
- Author: Stajah L Hoeflich
- Timestamp: Tues. Oct 26, 2021 @ 9:23 AM

### Background
This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward:

The babysitter 
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- gets paid $12/hour from start-time to bedtime
- gets paid $8/hour from bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)


Feature:
As a babysitter
In order to get paid for 1 night of work
I want to calculate my nightly charge
