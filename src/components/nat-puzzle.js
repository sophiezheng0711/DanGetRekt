import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {
    render() {
        return <h6>Hot dog, on a frog, dancing on the log, absolution</h6>;
    }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('mountNode'),
);