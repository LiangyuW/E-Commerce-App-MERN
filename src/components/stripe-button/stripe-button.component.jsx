
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton=({price})=>{
    const priceForStripe =price*100;
    const publishablekey ='pk_test_51IjRN6IQVOontsYXonAJUgs4HPHclw7o5WKhEhww5YrA66AigvYKHYPcRKlpYUZwv1mBCXTGlLuaxtvJZQylX9Op00H8QLQZuJ'

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Congee King Ltd.'
            billingAddress
            shippingAddress
            image='https://stripe.com/img/documentation/checkout/marketplace.png'
            description={`Your Total Is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            alipay
            bitcoin
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton