import React from 'react';
import './Cart.css'

const Cart = ({ Cart }) => {
    // console.log(Cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of Cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Oder Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax} </p>
            <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;