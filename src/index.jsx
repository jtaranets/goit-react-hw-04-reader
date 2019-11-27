import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Reader from './components/reader';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <Reader />
  </HashRouter>,
  document.getElementById('root'),
);
