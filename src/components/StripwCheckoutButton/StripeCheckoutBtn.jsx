import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Logo from './favicon.ico'

export const StripeCheckoutBtn = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51LoZCKIW4E0OX8GCJ3Sms3FO44CNOFb4nJC8WP5tiGUfoKIqyPISyBo5WrsN55ETHSG2h4GsVadxi0ZhxtYS84YX00gRqXnmS3'
   const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
  return (
    <StripeCheckout
    bitcoin
    label='Pay Now'
    zipCode
    billingAddress
    shippingAddress
    currency='USD'
    name='KARTUALS CLOTHING LTD'
    description={`Your Total is $${price}`}
    amount={priceForStripe}
    panelLabel='PAY NOW'
    token={onToken}
    stripeKey={publishableKey}
    image={Logo}
    />
  )
}
