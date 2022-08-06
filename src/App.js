import '../src/components/NavBar/NavBar'
import SaludoHome from './components/IntroHome/IntroHome';
import NavBarLogo from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootswatch/dist/morph/bootstrap.min.css';
import './Fonts/Fonts.css'



function App() {


  return (
    
          <div  className='container-fluid flex bg-dark body'>
            <div id='NavBar'>
                <NavBarLogo/> 
            </div>
            <br/>
            <SaludoHome/>
            <br></br>
            <div  id='Catalogo' className='container'>
                <ItemListContainer/>
            </div>
          </div>
          
  )
}

export default App;
