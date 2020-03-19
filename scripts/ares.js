'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Ensure environment variables are read.
require('../config/env');

const chalk = require('react-dev-utils/chalk');
const { spawn } = require('child_process');

const isWin = process.platform === 'win32';
const webOSTVCliDir = process.env.WEBOS_CLI_TV;

if (!webOSTVCliDir) {
  console.log();
  console.log(chalk.cyan(chalk.bold('The WebOS TV SDK could not be found')));
  console.log(
    `Go to ${chalk.bold('https://webostv.developer.lge.com/sdk/installation/')} and follow the instructions to install it`
  );
  console.log();
  process.exit(1);
}

const [, , command, ...args] = process.argv;

const executable = `${webOSTVCliDir}/ares-${command}${isWin ? '.cmd' : ''}`;

spawn(executable, args, { stdio: 'inherit' });
