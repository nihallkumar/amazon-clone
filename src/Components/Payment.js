import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {Link , useHistory } from 'react-router-dom';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import axios from 'axios';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecrete, setClientSecrete] = useState(true)

    useEffect(() => {
        //   generate the special stripe secrete which allows us to charge a customer

        const getClientScerete = async () => {
            const response = await axios({
                method: 'POST',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecrete(response.data.clientSecrete)

        }

        getClientScerete();
    }, [basket])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecrete, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent = payment confirmation

        })

        setSucceeded(true)
        setError(null)
        setProcessing(false)
        history.replace('/orders')
    }

    const handleChange = event => {
        // listen for the changes in the cardElement and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>Checkout (<Link to="/checkout">{basket.length} items</Link>)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment_address">
                        {user?.email}
                        <p>123, YamunaNagar</p>
                        <p>Haryana, India</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total : {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment