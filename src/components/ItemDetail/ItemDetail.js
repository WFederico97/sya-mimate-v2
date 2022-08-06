import React from 'react'
import Item from '../Item/Item'

export default function ItemList(props) {
    return (
   <div className='container flex row justify-content-center col-12'>
    {
        props.productos.map((product)=>{
            return(
                <Item key={product.id} imagen={product.imagen}  precio={product.precio} nombre={product.nombre} categoria={product.categoria} stock={product.stock}  />
            )

        })
    }
   </div> 
  )
}