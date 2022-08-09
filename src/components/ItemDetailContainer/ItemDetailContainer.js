import React from 'react'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { getProductById } from '../Data/itemData';

export default function ItemDetailContainer() {
  const [resultado, setResultado] = useState([{}]);
  const {id} = useParams();

  useEffect (()=> {
    AOS.init();
    AOS.refresh();
    
    getProductById(id)
      .then(resolve => {
        setResultado(resolve)
      })
      .catch(error => {
        console.log(error)
      })
    }, [id])
  return (
    <div>
      {
        <ItemDetail {...resultado} />
      }
    </div>
  );
}