
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart,removecart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';



function Productcard({item}) {
    const cartitems=useSelector((state)=>state.cart.value)
    const dispatch=useDispatch()


    
  return (
    <Card>
      <Card.Img className="productImage"variant="top" src={item?.image} />
      <Card.Body>
        <Card.Title>{item?.title.slice(0,10)}</Card.Title>
        <Card.Text>
          {item?.description.slice(0,70)}
        </Card.Text>
        <Card.Text className='fw-bold'>
          ${item?.price}
        </Card.Text>
        <div className='ButtonGroup'>
     <Link to={`/productdetails/${item.id}`}><Button variant="primary">view product</Button></Link>
        
       {
        cartitems.some((product)=>product.id==item.id)?<Button variant="dark" className=' 'onClick={()=>dispatch(removecart(item.id))}>Remove from cart</Button>
       
      :<Button variant="success" className='ms-2' onClick={()=>dispatch(addTocart(item))}>Add to cart</Button>}</div>
    </Card.Body>        
    </Card>
  )
}

export default Productcard
