import { useCartContext } from '../../context/CartContext'
import { Badge, ListGroup, Button } from 'react-bootstrap'
import EmptyCartButton from './EmptyCartButton';
import LegendsInCart from './LegendsInCart';
import './Cart.css'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore';

function Cart() {

  const {cartList,removeItems, finalPrice} = useCartContext()


const createOrder = async (e)=> {
  e.preventDefault()

  let order = {}

  order.buyer = {name: 'Federico', phone: '3415765751', email: 'federico@gmail.com'}

  order.items = cartList.map(cartItems =>{
    const id = cartItems.id
    const nombre = cartItems.title
    const precio = cartItems.price * cartItems.cantidad

    return {id, nombre, precio}
  })

  order.total = finalPrice()

  const db = getFirestore()
  const queryCollection = collection(db, 'items')

//Crear orden
await addDoc(queryCollection, order)
  .then(({id}) => console.log(id))

//Actualizar stock
/* const queryUpdate = doc(db, 'items', '2Ex9iQah59T53SWpvz4a')
updateDoc(queryUpdate,{
  stock:20
}) */

const queryUpdateById = await query(queryCollection,
  where(documentId(), 'in', cartList.map(it => it.id))
    
  )

const batch = writeBatch(db)
await getDocs(queryUpdateById)
  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
    stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
  })))
  .finally(() => console.log('Actualizado'))

  batch.commit()


return(console.log(cartList))
}



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
                <h3>{prod.description}</h3>
              </div>
              <h3>Precio:{`$${(prod.price * prod.cantidad)}.-`}</h3>
            </div>
            <Badge bg="primary" pill>
              <div className='qtyOfItems'>
                <h2>Unidades: {prod.cantidad}</h2>
                <Button className='botonEliminar' onClick={()=>removeItems(prod.id)}>Eliminar</Button>
              </div>
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>)}
      <div>
        <LegendsInCart/>
      </div>
      <EmptyCartButton/><br /><br />
      <Button className='btn warning' onClick={createOrder}>Crear Orden</Button>
    </div>
)
}

export default Cart
