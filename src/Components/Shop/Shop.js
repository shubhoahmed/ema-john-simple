import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);

    useEffect(() => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products]);

    const handleAddToCart = (product) => {
        const exists = cart.find(p => p.id === product.id);
        if (!exists) {
            product.quantity = 1;
            // console.log(cart)
            const newCartItem = [...cart, product];
            // console.log(newCartItem)
            setCart(newCartItem);
        }
        else {
            exists.quantity = exists.quantity + 1;
            const rest = cart.filter(p => p.id !== exists.id);
            setCart([...rest, exists]);
        }

        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart Cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;