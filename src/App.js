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
import Checkout from "./components/Checkout";
import { Home } from "./components/Home";

function App() {

  //MANERA DE AGREGAR LOS PRODUCTOS A FIREBASE CON EL MOCK

  // useEffect(()=>{
  //   const productosCollecction = collection(db, "products")
  //   productos.map((item)=> addDoc(productosCollecction, item))
  // }, [])
  return (
  <>
  <CartProvider>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <NavBar/>
  <Routes>
    {/* <Route path="/test" element={<TestLecturaDeProductos />} />  */}
    <Route path="/ProyectoCoderReact" element={<Home/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
    <Route path="/detail/:id" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />

  </Routes>
  <Footer/>
  </ThemeProvider>
  </BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;
