import React from 'react';
import { render } from 'react-dom';

const App = () =>{
  return <h1> Hola mundo!! </h1>
}

const Btn = ()=>{
  return React.createElement("button",{
    onClick: ()=> alert("Hola")
  },"Enviar");
}

render(<App/>, document.getElementById('root'));
render(<Btn/>, document.getElementById('button'));
