import React from 'react';

const Product = ({ product }) => {
    const { ratingsCount, img, name, price, seller } = product;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h4>Price: ${price}</h4>
            <p>Seller: {seller} </p>
            <p>Rating: {ratingsCount} </p>
        </div>
    );
};

export default Product;