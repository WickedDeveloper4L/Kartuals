import React from 'react'
import './checkoutItem.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeCartItem } from '../../redux/cart/cart.actions'


const CheckoutItem = ({cartItem, clearItem, addItem, removeCartItem}) => {
    const {imageUrl, name, price, quantity} = cartItem
  return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <span className='quantity_control' onClick={() => removeCartItem(cartItem)}>&#10096;</span>
            <span className='quantity_figure'>{quantity}</span>
            <span className='quantity_control' onClick={() => addItem(cartItem)}>&#10097;</span>
        </div>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10006;</div>
    </div>
  )
}
const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)), 
    addItem: item => dispatch(addItem(item)),
    removeCartItem: item => dispatch(removeCartItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)