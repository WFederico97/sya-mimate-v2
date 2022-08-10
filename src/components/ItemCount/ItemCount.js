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
        if (Counter <= 1) {
            alert("¡Usted no ha seleccionado ningun producto!")
        } else {
            setCounter(Counter - 1)
        }
    }

    return (
        <div className='container d-flex row justify-content-center  col-12 '>
            <div className='container d-flex align-items-center col-6  text-center fw-bolder m-2'>
                <Button variant=' btn btn-success  botonAdd fs-5 shadow' onClick={addCounter}>+</Button>
                <span className='m-3 text-dark fs-1'> {Counter}</span>
                <Button variant='btn btn-danger botonReduce fs-5 shadow' onClick={reduceCounter}  >-</Button>
            </div>
        </div>
    )
}