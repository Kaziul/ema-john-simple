import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd) =>total + prd.price,0);
    // or
    let total = 0;
    for(let i= 0; i<cart.length;i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    if(total > 15){
        shipping = 0;

    }
    else if(total > 0){
        shipping = 12.99;
    }
  

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
      const tax = formatNumber(total / 10);
      const grandTotal = total + shipping + formatNumber(tax);
    return (
      <div>
        <h4>Order Summary</h4>
        <p>Items Ordered: {cart.length} </p>
        <p>Product Price: {formatNumber(total)}</p>
        <p>
          <small>Shipping Cost: {shipping}</small>
        </p>
        <p>
          <small>Tax + VAT: {tax}</small>
        </p>
        <p>Total Price: {grandTotal}</p>
        <br />
        <Link to={"/review"}><button className="main-button">Review Order</button></Link>
      </div>
    );
};

export default Cart;