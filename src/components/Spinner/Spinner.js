import Spinner from 'react-bootstrap/Spinner';
import './Spinner.css'

function LoadingSpinner() {
  return (
    <Spinner style={{width: '12rem', height: '12rem'}} className='d-flex justify-content-center container-fluid fs-3 spinner' animation="border" variant='warning' role="status" >
        <h4 className=' visually-hidden text-dark text-center bg-warning '>Cargando productos...</h4>
    </Spinner>

  );
}

export default LoadingSpinner;