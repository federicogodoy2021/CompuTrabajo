import React from 'react'
import { Card } from 'react-bootstrap'
import BuyButton from '../BuyButton/BuyButton'

function Items({producto}) {

  return (
    <div>
        <Card.Footer>
            <div>
                
                <div titulo = {producto.title}>{`${producto.title}`}</div>
                <div reseña = {producto.description}>{`${producto.description}`}</div>
                <div costo = {producto.price}>{`${producto.price}`}</div>

            </div>
        </Card.Footer>
        <BuyButton/>          


    </div>
  )
}

export default Items