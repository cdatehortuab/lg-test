var ReactDevTools = require('react-devtools-core');
ReactDevTools.connectToDevTools({
  host: process.env.REACT_APP_DEVTOOLS_HOST,
});
