import React from 'react';
import ReactDOM from 'react-dom';
import { initNavigation, setKeyMap } from '@noriginmedia/react-spatial-navigation';

import './index.css';
import App from './App';
import { keyCodes } from './constants';

initNavigation({
  debug: true,
});

setKeyMap({
  left: keyCodes.LEFT,
  up: keyCodes.UP,
  right: keyCodes.RIGHT,
  down: keyCodes.DOWN,
  enter: keyCodes.ENTER,
});

ReactDOM.render(<App />, document.getElementById('root'));
