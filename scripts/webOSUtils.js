'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Ensure environment variables are read.
require('../config/env');
const path = require('path');
const chalk = require('react-dev-utils/chalk');

const NO_WEBOS_ARG = '--no-webos';

const useWebOS = process.argv.indexOf(NO_WEBOS_ARG) === -1;

const webOSTVCliDir = process.env.WEBOS_CLI_TV;

function getNoWebOSMessage() {
  return `use ${chalk.bold(NO_WEBOS_ARG)} argument to don't use WebOS tools`;
}

if (!webOSTVCliDir && useWebOS) {
  console.log();
  console.log(chalk.red(chalk.bold('The WebOS TV SDK could not be found')));
  console.log(
    `Go to ${chalk.bold('https://webostv.developer.lge.com/sdk/installation/')} and follow the instructions to install it`
    + ` or ${getNoWebOSMessage()}.`
  );
  console.log();
  process.exit(1);
}

const webOSTVSDKDir = process.env.LG_WEBOS_TV_SDK_HOME;
const webOSTVEmulatorDir = path.resolve(`${webOSTVSDKDir}/Emulator`);

module.exports = {
  getNoWebOSMessage,
  useWebOS,
  webOSTVSDKDir,
  webOSTVCliDir,
  webOSTVEmulatorDir,
};
