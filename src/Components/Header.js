import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
  return (
    <div>
      <h1>{titulo}</h1>
    </div>
  );
};
Header.protoTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
