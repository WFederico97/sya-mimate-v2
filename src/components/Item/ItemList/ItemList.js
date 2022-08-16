import React from 'react'
import Item from '../Item'

export default function ItemList(props) {
    return (
   <div className='catalogo container-fluid mx-auto d-flex  row justify-content-center col-xl-12'>
    {
        props.productos.map((product)=>{
            return(
                <Item key={product.id} id={product.id} imagen={product.imagen}  descripcion={product.descripcion} nombre={product.nombre} categoria={product.categoria} stock={product.stock}  />
            )

        })
    }
   </div> 
  )
}
