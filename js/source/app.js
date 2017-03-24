'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Excel from './components/Excel';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if(!headers){
  headers = ['title', 'year', 'score', 'comment'];
  data = [['test', '2015', '3', 'abcdefg']];
}

ReactDOM.render(
  <div>
    <h1>
      <Logo /> Welcome to the Whinepad!
    </h1>
    <Excel headers={headers} initialData={data} />
  </div>,
  document.getElementById('pad')
);