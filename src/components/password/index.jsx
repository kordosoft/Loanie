import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye as Show, faEyeSlash as Hide } from '@fortawesome/free-solid-svg-icons'

const Password = ({ title, name, value, onChange, placeholder }) => {
    const [isVisible, toggleVisible] = useState(false);
    const [type, setType] = useState('password');

    const setVisibility = () => {
        setType(isVisible ? 'password' : 'text');
        toggleVisible(!isVisible);
    };

    return (
        <div className="form-group">
            <label className="form-label">{title}</label>
            <div className="input-group">
                <input
                    className="form-control"
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <div className="input-group-append" onClick={setVisibility}>
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={isVisible ? Hide : Show} />
                    </span>
                </div>
            </div>
        </div>
    );
};

Password.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default Password;