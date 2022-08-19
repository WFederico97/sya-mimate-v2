import React, { useEffect } from 'react';
import './App.css'
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';
import 'bootswatch/dist/morph/bootstrap.min.css';
import './Fonts/Fonts.css'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import  {getFirestore, collection, getDocs } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDi8xsuNCCt8MZVeDJpT8JYADXKkTXWYA",
  authDomain: "sya-mimate.firebaseapp.com",
  projectId: "sya-mimate",
  storageBucket: "sya-mimate.appspot.com",
  messagingSenderId: "12349841893",
  appId: "1:12349841893:web:5e8c38e5b1200f8a75cf0c"
};

// Initialize Firebase


function App() {

  useEffect(() => {
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app) //base de datos
    const colRef = collection(db, 'products') ///referencia a la coleccion
    getDocs(colRef).then((snapshot) => {

    }, (error) => {

    });

  }, [])




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
      </div>
    </CartProvider>



  )
}

export default App;
