import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/esm/Container";
import { useCartContext } from '../../../context/CartContext';
import '../Cart.css'

const CartItem = ({ producto }) => {
    const { quitarProducto } = useCartContext();
    return (
        <Container fluid className="cartProductContainer">
            <Row className="cartProductBody ">
                <Col >
                    <img src={producto.imagen} alt={producto.nombre} className="imgProductoCart img-fluid" />
                </Col>
                <Col >
                    <h4 >Nombre: {producto.nombre} </h4>
                    <p>Cantidad: {producto.cantidad} </p>
                    <p>Precio unitario: ${producto.precio}</p>
                    <p>Subtotal: ${producto.cantidad * producto.precio}</p>

                </Col>
                <Button variant="danger" onClick={() => quitarProducto(producto.id)}>Quitar Producto</Button>
            </Row>
        </Container>
    )
}
export default CartItem