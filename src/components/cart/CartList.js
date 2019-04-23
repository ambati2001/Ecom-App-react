import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
    const { cart } = value;
    console.log("CartList");
    //console.log(value, cart);
    return (
        <div className="container-fluid">
            {
                cart.map(item => {
                    console.log(value, item);
                    return <CartItem key={item.id} item={item} value={value} />;
                })
            }

        </div>
    )
}
