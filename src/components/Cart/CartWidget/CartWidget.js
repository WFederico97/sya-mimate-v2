import React from 'react'
import { BsCart } from 'react-icons/bs'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'


const CartWidget = () => {
     const { totalProductos } = useCartContext();
    return (
        <> 
            <Link to={'/cart'}>
            <BsCart id='carritoDeComprasIcono' />
            </Link>
            <span className='itemWidget'>{ totalProductos() || " "}</span> 


        </>

    );
}
export default CartWidget