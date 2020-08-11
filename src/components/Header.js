import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { selected } = props;
  return (
    <nav>
      <h1>Store</h1>
      <div>{selected}</div>
    </nav>
  );
}

Header.propTypes = {
  selected: PropTypes.number,
};
