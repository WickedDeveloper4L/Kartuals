import './cartDropdown.scss'
import React from 'react'
import { connect } from 'react-redux/es/exports'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems, history, dispatch}) => {
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

const mapStateToProps= createStructuredSelector({
cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))