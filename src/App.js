/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { ThemeProvider } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";
import FetchContainer from "./components/FetchContainer";



function App() {
  const saludo = "Sitio Web en construccion";
  // const [contador, setContador] = useState(1);
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <ItemListContainer saludo={saludo} />
      <FetchContainer/>
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
