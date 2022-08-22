/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { data, getFetch } from '../../Data/itemData';
import { getFirestore, doc, getDoc } from "firebase/firestore";


export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState(false);
  const [resultado, setResultado] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const queryDatabase = getFirestore ()
    const queryDoc = doc(queryDatabase, 'products', id)
    getDoc(queryDoc)
    .then(res => setResultado({id:res.id, ...res.data()}))
    .catch(()=>{
      setError(true)
    })
    .finally(()=> {
      setLoading(false)
    })
  }, [id])

  return (
    <div className='itemDetailContainer'>
      {
       loading ? <h4 className='text-dark text-center bg-warning '>Cargando productos...</h4>  : <ItemDetail {...resultado} />
      }
    </div>
  );
}