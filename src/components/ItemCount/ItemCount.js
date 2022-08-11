import { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Counter(props) {
    const [Counter, setCounter] = useState(props.initial);

    function addCounter() {
        if (Counter >= props.stock) {
            alert(`El stock maximo es ${props.stock}`);
        } else {
            setCounter(Counter + 1);
        }

    }

    function reduceCounter() {
        if (Counter >= 1) {
            setCounter(Counter - 1)
        } else {
            alert('No has seleccionado ningun producto')
        }
    }
    function agregarProducto () {
        if( Counter >= 1) {
            alert('¡Producto(s) Agregado(s)!')
            setCounter(0)
        } else {
            alert('No hay productos para agregar, porfavor seleccione almenos UN producto')
        }
    }

    return (
        <div className='container d-flex row justify-content-center  col-12 '>
            <div className='container d-flex align-items-center col-6  text-center fw-bolder m-2'>
                <Button variant=' btn btn-success  botonAdd fs-5 shadow' onClick={addCounter}>+</Button>
                <span className='m-3 text-dark fs-1'> {Counter}</span>
                <Button variant='btn btn-danger botonReduce fs-5 shadow' onClick={reduceCounter}  >-</Button>
            </div>
            <div className='justify-content-center col-6'>
            <Button onClick={agregarProducto}  variant='btn btn-info'>Agregar producto</Button>
            </div>
        </div>
    )
}