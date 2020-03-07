const fs = require('fs-extra');
const paths = require('../config/paths');

const APP_INFO_VERSION_FOR_DEV = '0.0.0'

function copyPublicFolder(destination) {
  fs.copySync(paths.appPublic, destination, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}

function createHostedHtml(appLocation) {
  const htmlContent = `<!DOCTYPE html><html><head><script>location.href='${appLocation}';</script></head><body></body></html>`;
  fs.writeFileSync(paths.hostedHtml, htmlContent, { encoding: 'utf8' });
}

function replaceAppInfoVersionForDev() {
  const data = fs.readFileSync(paths.hostedAppInfo, { encoding: 'utf8' });
  const newData = data.replace(/("version":\s*").*(")/, `$1${APP_INFO_VERSION_FOR_DEV}$2`);
  fs.writeFileSync(paths.hostedAppInfo, newData, { encoding: 'utf8' });
}

module.exports = {
  APP_INFO_VERSION_FOR_DEV,
  copyPublicFolder,
  createHostedHtml,
  replaceAppInfoVersionForDev
};
