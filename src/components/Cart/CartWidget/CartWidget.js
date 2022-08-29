import React from 'react'
import { BsCart } from 'react-icons/bs'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'
import { Badge } from 'react-bootstrap'


const CartWidget = () => {
    const { totalProductos } = useCartContext();
    return (
        <>
            <Link to={'/cart'}>
                <Badge className='itemWidget'>
                    <BsCart id='carritoDeComprasIcono' ></BsCart> {totalProductos() || " "}
                </Badge>
            </Link>
        </>

    );
}
export default CartWidget