import './cartDropdown.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems)
    const history = useHistory()
    const dispatch = useDispatch()
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">{
                cartItems.length ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)) : <h3 className='empty'>Your Cart is Empty!</h3>
            }
            </div>
            <CustomButton onClick={
                ()=> {history.push('/checkout');
             dispatch(toggleCartHidden())}} >GO TO CHECKOUT</CustomButton>
        </div>
    ) 
}


export default CartDropdown