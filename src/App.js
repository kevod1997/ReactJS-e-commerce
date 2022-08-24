/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";

const saludo = "Sitio Web en construccion" 
function App() {

  function Contador() {
    const [contador, setCounter] = useState(1)

    return (
      <div className="contador">
    <h1><span>Contador: {contador} </span></h1>
    <button onClick={() => {
      setCounter( contador + 1)
    }}>Sumar</button>
    <button onClick={() => {
      setCounter( contador -1)
    }}>Restar</button>
    <button onClick={() => {
      setCounter( 0 )
    }}>Reinciar</button>
   </div>
    )
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
   <Contador/>
   <Mensaje/>
   </ThemeProvider>
  );
}

export default App;
