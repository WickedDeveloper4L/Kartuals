import React from 'react'
import './cartItem.scss'

const CartItem = ({item}) => {

    const {name, price, imageUrl, quantity} = item
  return (
    <div className='cart-item'>
        <img src={imageUrl} alt="Item" />
        <div className="item-details">
        <span className='name'>{name}</span>
        <span className='name'>{quantity} x ${price}</span>
        </div>
    </div>
  )
}

export default CartItem