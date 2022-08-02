import{ useState} from 'react'
import './index.css'


export default function Counter (props) {
    const [Counter, setCounter] = useState(props.initial);
    
    function addCounter ( ){
        if (Counter >= props.stock){
                alert(`El stock maximo es ${props.stock}`);
        } else {
            setCounter (Counter + 1);
        }

    }

    function reduceCounter () {
        if (Counter <= 1) {
            alert("¡Usted no ha seleccionado ningun producto!")
        } else {
            setCounter (Counter - 1)
        }
    }

    return (
        <div className='container d-flex  justify-content-center col-6 '>
            <div className='container d-flex align-items-center col-12 text-center fw-bolder m-2'>
                <button className='col-4 btnAdd' onClick={addCounter}>+</button>
                <span className='col-6  text-dark fs-4'> {Counter}</span>
                <button className='col-4 btnRedd' onClick={reduceCounter}  >-</button>    
            </div>
        </div>
    )
}