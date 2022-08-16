import React from 'react'
import { BsCart } from 'react-icons/bs'
import './index.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'


const CartWidget = () => {
     const { precioFinal } = useCartContext();
    return (
        <> 
            <Link to={'/cart'}>
            <BsCart id='carritoDeComprasIcono' />
             <span>{ precioFinal || " "}</span> 
            </Link>


        </>

    );
}
export default CartWidget