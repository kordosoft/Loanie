import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={`loan-button ${className}`} type="button">{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Button;