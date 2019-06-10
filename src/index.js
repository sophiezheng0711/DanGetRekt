import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import  LinkLabel from './components/linkLabel';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);

ReactDOM.hydrate(
  <LinkLabel />,
  document.getElementById('myOwnComponent')
);