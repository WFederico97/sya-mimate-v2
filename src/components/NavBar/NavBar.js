import logo from  '../Images/logo-mimate.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'
import CartWidget from '../CartWidget';


function NavBarLogo() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container className='d-flex' >
          <Navbar.Brand href="#home" className='brand m-2'>
            <img
              alt=""
              src={logo}
              className=" align-center img-fluid logoMate"
            />{' '}
              <hr></hr>
              <p className='text'> SyA Mi Mate</p>
             
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto navLinks">
              <Nav.Link href="#Mates">Mates</Nav.Link>
              <Nav.Link href="#Bombillas">Bombillas</Nav.Link>
              <Nav.Link href="#Yerbas">Yerbas</Nav.Link>
              <Nav.Link href="#Termos">Termos</Nav.Link>
              <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
            </Nav>
            <CartWidget/>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default NavBarLogo;