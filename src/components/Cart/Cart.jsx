import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Badge, Button, ListGroup } from 'react-bootstrap'

function Cart() {

  const {cartList, emptyCart} = useCartContext()
console.log(cartList)
/*   const montoTotal = cartlist.map(total => 
  return(
    for(i = cartList[0].cantidad; i<total.length; i++){
      console.log(total)
})) */



  return (

    <div>
      {cartList.map(prod => 
      <div>
        <ListGroup className="warning" key= {prod.id} as="ol" >
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h1>{prod.title}</h1>
              </div>
              <h3>Precio:{`$${(prod.price * prod.cantidad)}.-`}</h3>
            </div>
            <Badge bg="primary" pill>
              <h2>Unidades: {prod.cantidad}</h2>
            </Badge>
          </ListGroup.Item>
        </ListGroup>

        <div>
          <h1>Total de la compra: {prod.cantidad}</h1>
        </div>
      </div>)}

      <br/>
      <Button onClick={emptyCart}>Vaciar Cart</Button>
    </div>
  )
}



export default Cart

/* {cartList.map(prod => 
  <div>
    <ListGroup key= {prod.id} as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{prod.title}</div>
          <h3>Precio: {prod.price}</h3>
        </div>
        <Badge bg="primary" pill>
          {prod.cantidad}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    <br/>
    <Button onClick={emptyCart}>Vaciar Cart</Button>
  </div> */