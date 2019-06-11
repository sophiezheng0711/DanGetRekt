import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/MainApp';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
          crossorigin="anonymous">
        <title>DanGetRekt!</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log('Server is running...'));