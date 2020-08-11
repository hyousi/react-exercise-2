import React from 'react';
import PropTypes from 'prop-types';
import imgSrc from '../assets/product_image_placeholder.png';

export default function Item(props) {
  const { product, handleClick } = props;
  return (
    <div className="item-card">
      <h4>{product.name}</h4>
      <img src={imgSrc} alt="product image" className="image-size" />
      <div>
        {product.price}
        <button onClick={handleClick}>add to cart</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  product: PropTypes.object,
  handleClick: PropTypes.func,
};
