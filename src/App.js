import '../src/components/NavBar/NavBar'
import './App.css'
import SaludoHome from './components/IntroHome/IntroHome';
import NavBarLogo from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootswatch/dist/morph/bootstrap.min.css';
import './Fonts/Fonts.css'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';


function App() {


  return (
    <CartContext.Provider value={[]}>
                <div  className='container-fluid flex  body'>
            <div id='NavBar'>
                <NavBarLogo/> 
            </div>
            <span></span>
            <SaludoHome/>
            <br/>
            <Routes>
              <Route path='/' element={<ItemListContainer /> }/>
              <Route path='/categoria/:categoryId'  element={<ItemListContainer />}/>
              <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
          </div>
    </CartContext.Provider>

          
  )
}

export default App;
