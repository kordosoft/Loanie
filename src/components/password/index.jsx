import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as Show, faEyeSlash as Hide } from '@fortawesome/free-solid-svg-icons';

import { Input } from 'components';

const Password = (props) => {
    const [isVisible, toggleVisible] = useState(false);
    const [type, setType] = useState('password');

    const setVisibility = () => {
        setType(isVisible ? 'password' : 'text');
        toggleVisible(!isVisible);
    };

    const addOn = () => {
        return (
            <span className="input-group-text" onClick={setVisibility} role="presentation">
                <FontAwesomeIcon icon={isVisible ? Hide : Show} />
            </span>
        );
    };

    return <Input {...props} inputType={type} addOn={addOn()} />;
};

Password.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

Password.defaultProps = {
    placeholder: '',
};

export default Password;
