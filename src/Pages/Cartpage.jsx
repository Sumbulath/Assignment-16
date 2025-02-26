import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import Productcard from '../Components/Productcard';

function CartPage() {
    const cartitems = useSelector((state)=>state.cart.value)
    console.log(cartitems, "cart item");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Cart Items {cartitems.length}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         {
            cartitems.map((product)=>(
             <Productcard item={product}/>))
            }
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartPage;