/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { ThemeProvider } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";
import FetchContainer from "./components/FetchContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  const saludo = "Sitio Web en construccion";
  // const [contador, setContador] = useState(1);
  return (
  <>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer saludo={saludo}/>} />
    <Route path="/category/:idcategory" element={<ItemListContainer saludo={saludo}/>} />
    <Route path="/product/:idproduct" element={<ItemDetailContainer/>} />
  </Routes>
  <Footer/>
  </ThemeProvider>
      {/*  <ThemeProvider theme={theme}>
      <FetchContainer/>
  </ThemeProvider> */}
  </BrowserRouter>
  </>
  );
}

export default App;
