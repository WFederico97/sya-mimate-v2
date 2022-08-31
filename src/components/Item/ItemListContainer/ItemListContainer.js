import React from 'react'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import LoadingSpinner from '../../Spinner/Spinner';


export default function ItemListContainer() {
  //console.log(data)
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const { categoryId } = useParams ();
  
  useEffect(() => {
  const queryDatabase = getFirestore ();
  const queryCollection = collection(queryDatabase, 'products')
  if(categoryId){
    const queryFilter = query(queryCollection, where('categoria', '==', categoryId))
    getDocs(queryFilter)
      .then(res => setResultado(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
      .catch(()=>{
        setError(true)
      })
      .finally(()=> {
        setLoading(false)
      }, 2000)
  } else {
    getDocs(queryCollection)
      .then(res => setResultado(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
      .catch(()=>{
        setError(true)
      })
      .finally(()=> {
        setLoading(false)
      }, 2000)
  }


  }, [categoryId])

  return (
    <>
      {
         loading ? <div><LoadingSpinner    />  </div> : <ItemList productos={resultado} />
      }

    </>
  )
}
