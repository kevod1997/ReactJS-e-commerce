/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";
import Demo from "./components/Demo";
import Producto from "./components/Producto";
import EnableOnInputChange from "./components/EnableOnInputChange";

// let producto1 = { id: 100, name: 'zapato nike', price: 100 };
// let producto2 = { id: 101, name: 'zapato adidas', price: 150 };
// let producto3 = { id: 102, name: 'vestido lola', price: 300 };

// function consoleHolaMundo() {
//   console.log('hola mundo');
// }


const saludo = "Sitio Web en construccion" 
function App() {

 
  
  function Contador() {
    const [contador, setCounter] = useState(0)
    return (
      <div className="contador">
    <h1><span>Contador: {contador} </span></h1>
    <button onClick={() => {
      setCounter( contador + 1)
    }}>Sumar</button>
    <button stop={stop} onClick={() => {
      setCounter( contador -1)
    }}>Restar</button>
    <button  onClick={() => {
      setCounter( 0 )
    }}>Reinciar</button>
   </div>
    )
  }

  function Disable(){
    return <button disabled={false}>I am Disabled!</button>
    }

  
  function Mensaje() {
    const [mensaje, setMensaje] = useState("")

    return (
      <div className="mensaje">
    <input className="input" onChange={e => setMensaje(e.target.value)}></input>
    <button onClick={() => {
        mensaje.length == 0 ? alert('El mensaje esta vacio') : 
       alert("Tu mensaje es: " + mensaje)
    }}>Guardar</button>
   </div>
    )
  }
  return (
   <ThemeProvider theme={theme}>
   <NavBar/>
   <ItemListContainer saludo={saludo}/>
   <Contador />
   <Mensaje/>
   <EnableOnInputChange/>
   <Disable/>
   {/* <Demo/> */}
   {/* <Producto item={producto1} color={'coral'} consoleHolaMundo={consoleHolaMundo}/> */}
   </ThemeProvider>
  );
}

export default App;
