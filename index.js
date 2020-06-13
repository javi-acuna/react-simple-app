import React from 'react';
import { render } from 'react-dom';

// function SaludarEnIdiomas(idioma){
//   if(idioma === "es"){
//     return <span>Hola</span>;
//     } else {
//       return <span>Hello</span>;
//     }
// }

const Saludo = () => {
  const nombre = 'Javier';
//  return <p><SaludarEnIdiomas idioma='en'/> {`${nombre}`}</p>
  const idioma = "es";
  return (
    <div>
    {
      idioma === "en" ? <p>Hello</p> : <p>Hola</p>
    }
    </div>
  )
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
