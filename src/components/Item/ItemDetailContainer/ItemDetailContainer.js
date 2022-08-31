/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import LoadingSpinner from '../../Spinner/Spinner';


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
    }, 2000)
  }, [id])

  return (
    <div className='itemDetailContainer'>
      {
       loading ? <div><LoadingSpinner    />  </div>  : <ItemDetail {...resultado} />
      }
    </div>
  );
}