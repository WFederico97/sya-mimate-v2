import React from 'react'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { data, getFetch, getProductsByCategory } from '../Data/itemData';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  //console.log(data)
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const { categoryId } = useParams

  useEffect(() => {

    if(!categoryId){
      getFetch
      .then((resp)=>setResultado(resp))
      .catch(()=>setError(true))
      .finally(() => {
        setLoading(false)
      })
    }else{
      getProductsByCategory(categoryId).then(data=>{
        setResultado(data)
      })
    }
  })

  return (
    <>
      {
        loading ? <h4 className='text-dark text-center bg-warning '>Cargando productos...</h4> : <ItemList productos={resultado} />
      }

    </>
  )
}
