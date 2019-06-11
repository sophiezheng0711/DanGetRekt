import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import  MainText from './components/MainText';
import { Container } from 'react-bootstrap';

var inputText = "If you didn't already know, I absolutely love mathematics. As such, I have decided to encode my message into a few numbers. These numbers are pretty big though, I'd suggest breaking them down into some smaller pieces.";
var inputTitle = "Welcome to Joe's Puzzle!";

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);

ReactDOM.render(
  <MainText text={inputText} title={inputTitle}/>,
  document.getElementById('myOwnComponent')
);

var puzzle = "92,842,061 | 156,839 | 844,118 | 3,337 | 21,229 | 989 | 84,098,626 | 11,122 | 968,208,014,697 | 989";

ReactDOM.render(
  <Container><p>{puzzle}</p></Container>,
  document.getElementById("bodyZone")
);