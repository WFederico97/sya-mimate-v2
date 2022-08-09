import React from 'react'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { data } from '../Data/itemData';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  //console.log(data)
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const { categoryId } = useParams

  useEffect(() => {

    const ProductData = new Promise((res, rej) => {
      setTimeout(() => {
        res(data)
        rej("¡Error! No se pudieron cargar los productos")
      }, 2000)
    })

    const ProductsCategory = new Promise((res, rej) => {
      setTimeout(() => {
        res(data)
        rej("error")
      }, 2000)
    })

    if (!categoryId) {
      ProductData
        .then((result) => {
          setResultado(result)
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      ProductsCategory(categoryId).then(resultado => {
        setResultado(resultado)
      })
    };
  })

  return (
    <>
      {
        loading ? <h4 className='text-dark text-center bg-warning '>Cargando productos...</h4> : <ItemList productos={resultado} />
      }

    </>
  )
}
