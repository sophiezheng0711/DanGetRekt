import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/MainApp';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);