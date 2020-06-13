import React from 'react';
import { render } from 'react-dom';


const Saludo = () => {
  return <p>Hola</p>;
}
const App = () =>{
  return <h1> <Saludo/> </h1>;
}

// const Btn = ()=>{
//   return React.createElement("button",{
//     onClick: ()=> alert("Hola")
//   },"Enviar");
// }

//con jsx
const Btn = () => <button onClick={()=> alert("Hola") }> Enviar </button>

render(<App/>, document.getElementById('root'));
render(<Btn/>, document.getElementById('button'));
