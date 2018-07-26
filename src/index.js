import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <h2 className="text-center">
    Hello React with JSX!! -- {Math.random()}
  </h2>,
  document.getElementById('root')
);