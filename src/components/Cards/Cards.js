import Card from 'react-bootstrap/Card';
import Counter from '../ItemCount';
import { MdAddShoppingCart } from "react-icons/md";
import './index.css'


export default function CardProducto() {
    function productoAgregado () {
      return(
        alert('¡Usted ha agregado su/s producto/s al carrito con exito!')
      );
    }
  return (
    <Card style={{ width: '18rem' }} className='gap-4 m-4 '>
      <MdAddShoppingCart  className='iconProductAdd m-4 '/>
      <Card.Body className='cardBody' >
        <Card.Title >Producto</Card.Title>
        <Card.Text>
            Lorem Ipsum Dolor Set
        </Card.Text>
        <Counter initial={1} stock={25}/>
        <button onClick={productoAgregado} className='btnCarrito'>¡Quiero este producto en mi carrito!</button>
      </Card.Body>
    </Card>
  );
}