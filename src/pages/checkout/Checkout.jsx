import React from 'react'
import './checkout.scss'
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { StripeCheckoutBtn } from '../../components/StripwCheckoutButton/StripeCheckoutBtn'

const Checkout = ({cartItems, total}) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
        <span>Product</span>
        </div>
        <div className="header-block">
        <span>Description</span>
        </div>
        <div className="header-block">
        <span>Quantity</span>
        </div>
        <div className="header-block">
        <span>Price</span>
        </div>
        <div className="header-block">
        <span>remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id}/>)}
      <div className='total'>
      <span>TOTAL: ${total}</span>
      <div className='test-warning'>
        <span className="warning">Note! this is a test payment, use this test credit card details: <br/> 5555-5555-5555-4444 <br/> EXP: 02/24 -- CVV: 123</span>
      </div>
      <StripeCheckoutBtn price={total}/>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})


export default connect(mapStateToProps)(Checkout)