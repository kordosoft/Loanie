import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, onClick, className }) => {
  return <input type={type} onClick={onClick} className={`btn ${className}`} value={text} />;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  onClick: () => {},
};

export default Button;
