import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensaje }) => {
  return (
    <Fragment>
      <p className="alert alert-danger">{mensaje}</p>
    </Fragment>
  );
};

Error.protoTypes = {
  mensaje: PropTypes.string.isRequired,
};
export default Error;
