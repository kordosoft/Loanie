import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import { ForgotPasswordModel } from './types';

const ForgotPassword = (forgotPassword) => {
    return (
        <div className="forgotPassword">
            {JSON.stringify(forgotPassword)}
        </div>
    );
};

ForgotPassword.propTypes = PropTypes.instanceOf(ForgotPasswordModel);

export default ForgotPassword;