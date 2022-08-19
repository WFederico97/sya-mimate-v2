import React from 'react'
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { getFetch } from '../../Data/itemData';


export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error ,setError] = useState(false);
  const [resultado, setResultado] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getFetch.then((res) =>{
      if(id){
          setResultado(res.find(products => products.id == id))
      }
      else setResultado(res)
    })

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
        <ItemDetail {...resultado} />
      }
    </div>
  );
}