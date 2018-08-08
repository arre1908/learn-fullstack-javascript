import React from 'react';
import ReactDom from 'react-dom';

import data from './testData';
console.log(data);

import App from './components/App';

ReactDom.render(
  <App contests={data.contests}/>,
  document.getElementById('root')
);