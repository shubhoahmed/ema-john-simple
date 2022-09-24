import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { ratingsCount, img, name, price, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Seller: {seller} </p>
            <p>Rating: {ratingsCount} </p>
        </div>
    );
};

export default Product;