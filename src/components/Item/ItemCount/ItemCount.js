import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Counter({initial, stock, onAdd}) {
    const [Counter, setCounter] = useState(parseInt (initial));

    function addCounter() {
        if (Counter <= stock) {
            setCounter(Counter + 1);
        }

    }

    function reduceCounter() {
        if (Counter >= 1) {
            setCounter(Counter - 1)
        }
    }

    useEffect(()=>{
        setCounter(parseInt(initial))
    }, [initial])


    return (
        <div className='container d-flex row justify-content-center  col-12 '>
            <div className='container d-flex align-items-center col-6  text-center fw-bolder m-2 w-100'>
                <Button disabled={Counter >= stock} variant=' btn btn-success  botonAdd fs-5 shadow w-100' onClick={addCounter}>+</Button>
                <span className='m-3 text-dark fs-1 w-100'> {Counter}</span>
                <Button disabled={Counter <= 1} variant='btn btn-danger botonReduce fs-5 shadow w-100' onClick={reduceCounter}  >-</Button>
            </div>
            <div className='justify-content-center '>
            <Button disabled={stock <= 0} onClick={() => onAdd(Counter)}  variant='btn btn-info w-100'>Agregar al carrito</Button>
            </div>
        </div>
    )
}