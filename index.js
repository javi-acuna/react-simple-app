import React, { Component, useState } from "react";
import { render } from "react-dom";

const Button = () => {
  const [counter, setCounter] = useState(0);
  return(
    <div>
      <p>Presionado: {counter}</p>
      <button onClick={()=> setCounter(counter+1)}>click me!</button>
    </div>
  )
}
const nombres = ["Uriel", "Javier", "Marines", "Claudia"];

// function getNombres(){
//   const elementosLista =[];
//   for(var i=0; i<nombres.length;i++){
//     elementosLista.push(<li>{nombres[i]}</li>);
//   }
//   console.log(elementosLista);
//   return elementosLista;
// }

const Nombres = () => {
//  return <ul>{getNombres()}</ul>
  return (
    <ul>
      {nombres.map((nom, index) => (
        <li key={index}>{nom}</li>
      ))}
    </ul>
  );
};

// function SaludarEnIdiomas(idioma){
//   if(idioma === "es"){
//     return <span>Hola</span>;
//     } else {
//       return <span>Hello</span>;
//     }
// }

const Saludo = () => {
  const nombre = "Javier";
//  return <p><SaludarEnIdiomas idioma='en'/> {`${nombre}`}</p>
  const idioma = "es";
  return <div>{idioma === "en" ? <p>Hello</p> : <p>Hola</p>}</div>;
};

// const Saludar = (props) => {
//   return <p>Hola {props.nombre}</p>
// }

const Saludar = ({ nombre, idioma = "en" }) => {
  const saludo = idioma === "es" ? "Hola" : "Hello";
  return (
    <p>
      {saludo} {nombre}
    </p>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Button/>
        </div>
        <h1>
          <Saludo />
        </h1>
        <div>
          <Nombres />
        </div>
        <div>
          <Saludar nombre="Javi" idioma="en" />
        </div>
      </>
    );
  }
}

// const Btn = ()=>{
//   return React.createElement("button",{
//     onClick: ()=> alert("Hola")
//   },"Enviar");
// }

//con jsx
const Btn = () => <button onClick={() => alert("Hola")}> Enviar </button>;

render(<App />, document.getElementById("root"));
render(<Btn />, document.getElementById("button"));
