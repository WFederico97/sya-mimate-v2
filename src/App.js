import '../src/components/NavBar/NavBar'
import NavBarLogo from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'bootswatch/dist/morph/bootstrap.min.css';



function App() {
  return (
    
          <div className='container-fluid flex bg-dark'>
            <div id='NavBar'>
                <NavBarLogo/> 
            </div>
            <br></br>
            <div id='Catalogo' className='container'>
                <ItemDetailContainer/>
            </div>
          </div>
          
  )
}

export default App;
