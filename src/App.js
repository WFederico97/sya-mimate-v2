import React from 'react';
import '../src/components/NavBar/NavBar'
import './App.css'
import SaludoHome from './components/IntroHome/IntroHome';
import NavBarLogo from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';
import 'bootswatch/dist/morph/bootstrap.min.css';
import './Fonts/Fonts.css'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <CartProvider>
      <div className='container-fluid flex  body'>
        <div id='NavBar'>
          <NavBarLogo />
        </div>
        <span></span>
        <SaludoHome />
        <br />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>



  )
}

export default App;
