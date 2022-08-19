import React from 'react'
import Item from '../Item'

export default function ItemList(props) {
    return (
   <div className='container-fluid gap-5 justify-content-center d-flex  row  col-xl-12'>
    {
        props.productos.map((product)=>{
            return(
                <Item key={product.id} id={product.id} imagen={product.imagen}  descripcion={product.descripcion} nombre={product.nombre} precio={product.precio} categoria={product.categoria} stock={product.stock}  />
            )

        })
    }
   </div> 
  )
}
