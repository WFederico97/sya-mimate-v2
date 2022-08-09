import '../src/components/NavBar/NavBar'
import SaludoHome from './components/IntroHome/IntroHome';
import NavBarLogo from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootswatch/dist/morph/bootstrap.min.css';
import './Fonts/Fonts.css'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    
          <div  className='container-fluid flex bg-dark body'>
            <div id='NavBar'>
                <NavBarLogo/> 
            </div>
            <SaludoHome/>
            <br/>
            <Routes>
              <Route path='/' element={<ItemListContainer /> }/>
              <Route path='/categoria/mates'  element={<ItemListContainer categoria={"mates"}/>}/>
              <Route path='/categoria/bombillas' element={<ItemListContainer categoria={"bombillas"}  />}/>
              <Route path='/categoria/yerbas'  element={<ItemListContainer  categoria={'yerbas'}/>}/>
              <Route path='/categoria/termos'  element={<ItemListContainer categoria={'termos'} />}/>
              <Route path='/categoria/accesorios'  element={<ItemListContainer categoria={'accesorios'} />}/>
              <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
            <br/>
            <br></br>
          </div>
          
  )
}

export default App;
