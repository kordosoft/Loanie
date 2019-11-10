import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, onClick, className }) => {
    return (
        <button type={type} onClick={onClick} className={`btn ${className}`}>{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string
};

Button.defaultProps = {
    className: '',
    type: 'button'
}

export default Button;