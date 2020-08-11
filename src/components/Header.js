import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { selected } = props;
  return (
    <nav>
      <h1>Store</h1>
      <div>
        <i className="fas fa-shopping-cart"></i>
        <span className="shopping-cart">{selected}</span>
      </div>
    </nav>
  );
}

Header.propTypes = {
  selected: PropTypes.number,
};
