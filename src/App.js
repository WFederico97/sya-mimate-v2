import React from 'react';
import './App.css'
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';
import 'bootswatch/dist/morph/bootstrap.min.css';
import './Fonts/Fonts.css'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/js/bootstrap.bundle'



// Initialize Firebase


function App() {



  return (
    <CartProvider>
      <div className='container-fluid flex  body'>
        <div id='Header'>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <div id='Footer'>
          <hr></hr>
          <Footer/>
        </div>
      </div>
    </CartProvider>



  )
}

export default App;
