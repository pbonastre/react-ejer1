import React, { Component } from 'react';
import { render } from 'react-dom';

//React element
//const element
//const Hello = <h2 title='algo'>Bienvenido a React </h2>
//console.log(Hello)
//render(Hello,document.getElementById('root'))

//React Component
function Hello (){
  return <h1> bienvenido a React </h1>
}

render(<Hello/>, document.getElementById('root'))
