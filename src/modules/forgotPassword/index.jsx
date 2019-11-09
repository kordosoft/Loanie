import React, { useState } from 'react';

import './index.scss';

import { ForgotPasswordModel } from './types';

const ForgotPassword = () => {
    const [forgotPassword, setForgotPassword] = useState(new ForgotPasswordModel());

    return (
        <div className="forgotPassword">
            {JSON.stringify(forgotPassword)}
        </div>
    );
};

export default ForgotPassword;