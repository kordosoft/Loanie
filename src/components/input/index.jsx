import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, name, inputType, value, onChange, placeholder }) => {   
    return (
        <div className="form-group">
            <label className="form-label">{title}</label>
            <div className="input-group">
                <input
                    className="form-control"
                    name={name}
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default Input;