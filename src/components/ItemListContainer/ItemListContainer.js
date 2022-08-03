import React from 'react'
import { data } from '../Data/itemData';
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer() {
  //console.log(data)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  
useEffect(() => {
  const productCarrito = new Promise ((res, rej)=>{
    setTimeout(() => {
           res(data)
           rej("¡Error! No se pudieron cargar los productos")
    }, 2000);
  })

  productCarrito
    .then((result)=>{
      setResultado(result)
    })
    .catch(()=> {
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    });

})
  return (
    <>
      {
        loading ? <h4 className='text-dark text-center bg-warning '>Cargando productos...</h4> : <ItemList productos={resultado} />
      }
      
    </>
  )
}
