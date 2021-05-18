import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDomServer from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
import App from '../src/App';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Something went wrong');
    }

  

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString( <App />)}</div>`
      )
    );
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
