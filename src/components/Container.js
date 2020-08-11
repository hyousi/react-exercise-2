import React from 'react';
import PropTypes from 'prop-types';
import ItemSection from './ItemSection';

export default function Container(props) {
  const { products, handleClick } = props;

  return (
    <div className="app-container">
      {Object.keys(products).map((category, index) => (
        <ItemSection
          key={index}
          category={category}
          products={products[category]}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

Container.propTypes = {
  products: PropTypes.array,
  handleClick: PropTypes.func,
};
