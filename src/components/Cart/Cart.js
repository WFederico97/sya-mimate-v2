import React from "react";
import CartItem from "./CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Cart = () => {
    const { cart, precioFinal, finalizarCompra } = useCartContext();

    return (
        <>
            {
                (cart.length === 0) ?
                    <div className="w-auto shadow-lg rounded d-flex row">
                        <h3 className="text-dark text-center bg-warning">No hay productos en tu carrito, por favor , haga click en el boton debajo para volver al catálogo </h3>
                        <Link to={'/'}>
                            <Button className="btn btn-info col-12">Volver al catálogo</Button>
                        </Link>
                    </div>
                    :
                    cart.map((producto) => {
                        return (
                            <CartItem key={producto.id} producto={producto} />
                        )

                    })

            }
            <div>
            <h4 className="cartTotal">Total: ${precioFinal()}</h4>
            <span> {finalizarCompra()} </span>
            </div>

        </>
    )
}

export default Cart