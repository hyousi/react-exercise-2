import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function ItemSection(props) {
  const { category, products, handleClick } = props;
  const title = <h2>{category}</h2>;
  const productList = products.map((product, index) => (
    <Item key={index} product={product} hadnleClick={handleClick} />
  ));
  return (
    <section className="item-section">
      {title}
      {productList}
    </section>
  );
}

ItemSection.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
  handleClick: PropTypes.func,
};
