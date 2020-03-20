'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Ensure environment variables are read.
require('../config/env');

const { spawn, spawnSync } = require('child_process');
const { webOSTVCliDir } = require('./webOSUtils');

const isWin = process.platform === 'win32';

function ares(command, args, options, sync = false) {
  const executable = `${webOSTVCliDir}/ares-${command}${isWin ? '.cmd' : ''}`;
  return (sync ? spawnSync : spawn)(executable, args, options);
}

if (require.main === module) {
  const [, , command, ...args] = process.argv;
  ares(command, args, { stdio: 'inherit' });
}

module.exports = ares;
