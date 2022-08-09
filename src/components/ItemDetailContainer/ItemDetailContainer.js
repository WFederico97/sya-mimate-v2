import React from 'react'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function ItemDetailContainer() {
  const [resultado, setResultado] = useState([{}]);
  const {productId} = useParams();

  useEffect (()=> {
    AOS.init();
    AOS.refresh();
    
    const ProductsId = new Promise ((res,rej)=>{
      setTimeout(()=>{
        res(resultado.find(prod => prod.id === resultado.id ))
        rej("error")
      }, 1000)
    })

    ProductsId (productId)
      .then(resultado => {
        setResultado(resultado)
      })
      .catch(error => {
        console.log(error)
      })
      
    }, [])
  return (
    <div>
      {
        <ItemDetail {...resultado} />
      }
    </div>
  );
}