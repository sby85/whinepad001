'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';

ReactDOM.render(
  <div style={ {padding:'20px'} }>
    <h1>Component list</h1>
    <h2>Logo</h2>
    <div style={ {display: 'inline-block', background: 'purple'} }>
      <Logo /> 
    </div>
    <h2>Button</h2>
    <div>onClickが指定されたButton: <Button onClick={() => alert('click')}>click</Button></div>
    <div>hrefが指定されたButton: <Button href="yahoo.co.jp">follow</Button></div>
    <div>class名が指定されたButton: <Button className="custom">None</Button></div>
    <h2>Suggest</h2>
    <div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>
    <h2>Rating</h2>
    <div>初期値なし: <Rating /></div>
    <div>初期値4: <Rating defaultValue={4} /></div>
    <div>最大値11: <Rating max={11} /></div>
    <div>読み取り専用: <Rating readonly={true} defaultValue={3} /></div>
    {/* add other components below */}
  </div>,
  document.getElementById('pad')
);