import logo from  '../logo-mimate.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'
import CartWidget from '../Cart/CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { TiThMenu } from "react-icons/ti";


function NavBarLogo(props) {
    return (
      <>
      <Navbar collapseOnSelect expand="lg"   sticky="top" className='navbar'>
        <Container fluid className='d-flex' >
          <Navbar.Brand  className='brand m-2'>
            <Nav.Link as={Link} to={'/'} className='link-logo-home' >
            <img
              alt=""
              src={logo}
              className=" mx-auto img-fluid logoMate"
            />
              <hr></hr>
              <p className='text-light navbar-text'> SyA Mi Mate</p>
            </Nav.Link>

             
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav color-light">
          <TiThMenu className='button-toggler'/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto navLinks fs-4 fw-bold ">
              <Nav.Link as={Link} to={"/categoria/Mates"} className='text-warning '>Mates</Nav.Link>
              <Nav.Link as={Link} to={"/categoria/Bombillas"} className='text-warning'>Bombillas</Nav.Link>
              <Nav.Link as={Link} to={"/categoria/Yerbas"} className='text-warning' >Yerbas</Nav.Link>
              <Nav.Link as={Link} to={"/categoria/Termos"} className='text-warning' >Termos</Nav.Link>
              <Nav.Link  as={Link} to={"/categoria/Accesorios"} className='text-warning' >Accesorios</Nav.Link>
            </Nav>
            <CartWidget/>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default NavBarLogo;