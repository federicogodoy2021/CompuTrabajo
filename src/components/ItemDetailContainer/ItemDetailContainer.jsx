import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail.jsx/ItemDetail'
import { getItems } from '../Items/store'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

useEffect(()=>{
    getItems
    .then(res => setProducto(res.find(prod => prod.id === 1)))
    .catch(err => console.log(err))
    .finally(() => console.log("Finalizado OK"))

}, [])

console.log(producto)
  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer