/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";


function App() {
  const saludo = "Sitio Web en construccion";
  const [contador, setContador] = useState(1);
  return (
    <ThemeProvider theme={theme}>
      <NavBar contador = {contador} />
      <ItemListContainer saludo={saludo} />
      <ItemCount stock={5} setContador= {setContador} contador= {contador}/>
      {/* 
       <Formularios/>
      <Promesas/>
      <Contador />
      <Mensaje />
      <EnableOnInputChange/> */}
      {/* <Demo/> */}
      {/* <Producto item={producto1} color={'coral'} consoleHolaMundo={consoleHolaMundo}/> */}
    </ThemeProvider>
  );
}

export default App;
