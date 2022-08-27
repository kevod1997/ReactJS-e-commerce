/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";
import EnableOnInputChange from "./components/EnableOnInputChange";
import Contador from "./components/Contador";
import Mensaje from "./components/Mensaje";

// let producto1 = { id: 100, name: 'zapato nike', price: 100 };
// let producto2 = { id: 101, name: 'zapato adidas', price: 150 };
// let producto3 = { id: 102, name: 'vestido lola', price: 300 };

// function consoleHolaMundo() {
//   console.log('hola mundo');
// }

const saludo = "Sitio Web en construccion";
function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ItemListContainer saludo={saludo} />
      <Contador />
      <Mensaje />
      <EnableOnInputChange/>
      {/* <Demo/> */}
      {/* <Producto item={producto1} color={'coral'} consoleHolaMundo={consoleHolaMundo}/> */}
    </ThemeProvider>
  );
}

export default App;
