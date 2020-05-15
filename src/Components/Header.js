import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
  return (
    <div>
      <h2>{titulo}</h2>
    </div>
  );
};
Header.protoTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
