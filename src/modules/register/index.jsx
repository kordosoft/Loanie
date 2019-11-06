import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import { RegisterModel } from './types';

const Register = (register) => {
    return (
        <div className="login">
            {JSON.stringify(register)}
        </div>
    );
};

Register.propTypes = PropTypes.instanceOf(RegisterModel);

export default Register;