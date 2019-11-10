import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Input = ({ title, name, inputType, value, onChange, placeholder }) => (
    <div className="form-group">
        <label className="form-label">{title}</label>
        <input
            className="loan-input"
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder} />
    </div>
);

Input.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'number', 'password']).isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,   
    placeholder: PropTypes.string
};

export default Input;