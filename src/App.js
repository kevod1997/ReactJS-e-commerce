/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { ThemeProvider } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import theme from "./MuiTheme";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {CartProvider} from './context/CartContext'

function App() {

  const saludo = "Sitio Web en construccion";

  return (
  <>
  <CartProvider>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <NavBar/>
  <Routes>
    {/* <Route path="/test" element={<Test />} /> */}
    <Route path="/" element={<ItemListContainer saludo={saludo}/>} />
    <Route path="/category/:categoryId" element={<ItemListContainer saludo={saludo}/>} />
    <Route path="/detail/:id" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart saludo={saludo}/>} />
  </Routes>
  <Footer/>
  </ThemeProvider>
  </BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;
