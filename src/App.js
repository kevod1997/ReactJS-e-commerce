/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme"

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
   </div>
    )
  }

  return (
   <ThemeProvider theme={theme}>
   <NavBar/>
   <ItemListContainer saludo={saludo}/>
   <Contador/>
   </ThemeProvider>
  );
}

export default App;
