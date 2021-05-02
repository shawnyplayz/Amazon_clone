import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            
            {basket?.length === 0 ?(
                <div>
                    <h2>You Shopping Basket is empty</h2>
                </div>
            )  : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket</h2>
                        {basket.map(item =>(
                            <CheckoutProduct
                            item={item.id}
                            title={item.id}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
