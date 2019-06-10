import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import  MainText from './components/MainText';

ReactDOM.hydrate(
  <MainText text="Hello World!"/>,
  document.getElementById('myOwnComponent')
);

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);

