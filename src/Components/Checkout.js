import React from 'react'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout_left">

        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_prime_day_2021_991-usen_placement203_1500x4501623702258600" alt="" />

        <div>
          <h2 className='checkout_title'>Your Shopping Basket</h2>

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

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout