import React from 'react'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { data, getFetch, getProductsByCategory } from '../../Data/itemData';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
  //console.log(data)
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const { categoryId } = useParams ();
  useEffect(() => {
    getFetch.then((res) =>{
      if(categoryId){
          setResultado(res.filter(products => products.categoria == categoryId))
      }
      else setResultado(res)
    })

    .catch(()=>{
      setError(true)
    })
    .finally(()=> {
      setLoading(false)
    })
  }, [categoryId])

  return (
    <>
      {
        loading ? <h4 className='text-dark text-center bg-warning '>Cargando productos...</h4> : <ItemList productos={resultado} />
      }

    </>
  )
}
