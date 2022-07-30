import '../src/components/NavBar/NavBar'
import NavBarLogo from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

          <div className='container-fluid flex bg-dark'>
            <div id='NavBar'>
                <NavBarLogo/> 
            </div>
            <br></br>
            <div id='Catalogo'>
                <ItemListContainer />
            </div>
          </div>
          
  )
}

export default App;
