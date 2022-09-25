import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <div className='product-item'>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small> </p>
                <p><small>Rating: {ratings}</small> </p>

            </div>
            <div>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'> Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>
        </div>
    );
};

export default Product;