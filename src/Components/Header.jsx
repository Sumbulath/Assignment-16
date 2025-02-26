
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Cartpage from '../Pages/Cartpage';


function Header() {
  
    
    
    
  return (
    <div>
        <Navbar  className="bg-primary text-white text-center py-3">
      <Container>
        <div className="Headercontainer">
        <h1 >Fake Store</h1>
        <p>Your one-stop shop for demo products</p>

        </div>
        
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
        </Navbar.Collapse>
        {/* /* <Button variant="primary">Cart Items  {cartitems.length}</Button> */}
        <Cartpage/>
        
      </Container>
    </Navbar>
  
      
    </div>
  )
}

export default Header
