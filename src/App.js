import React from 'react'
import Navbar from './components/Header/Navbar'
import Newnav from './components/Newnav/Newnav'
import Products from './components/product/produxt'
import { Routes,Route } from 'react-router-dom'

import Footer from './components/Footer/footer'
import Home from './components/Homes/Home'
import Product from './components/product/products';
import Carts from './components/Cart/cart';


function App(){
  return (
    <>
    <Navbar/>
    <Newnav/>
   
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:id" element={<Product/>}></Route>
      <Route path="/cart" element={<Carts/>}></Route>
      
    </Routes>
    <Footer/>
    </>
  )
}
export default App



