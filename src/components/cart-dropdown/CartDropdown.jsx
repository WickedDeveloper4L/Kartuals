import './cartDropdown.scss'
import React from 'react'
import { connect } from 'react-redux/es/exports'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({cartItems}) => {
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps= state =>({
cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)