import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    // console.log(cart)
    const handleAddProduct = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
      <div className="shop-container">
        <div className="product-container">
            {products.map((pd) => (<Product 
            showAddToCart = {true}
            key={pd.key}
            handleAddProduct = {handleAddProduct}
            product={pd}>
              
            </Product>))}
        </div>
        <div className="cart-container">
           <Cart cart ={cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;